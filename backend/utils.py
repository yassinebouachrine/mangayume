import os
import uuid
from PIL import Image
from PyPDF2 import PdfReader
from werkzeug.utils import secure_filename
from config import Config
import io


def allowed_image(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_IMAGE_EXTENSIONS


def allowed_pdf(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_PDF_EXTENSIONS


def save_cover_image(file):
    """Sauvegarde une image de couverture"""
    if not file or not allowed_image(file.filename):
        return None

    os.makedirs(Config.COVERS_FOLDER, exist_ok=True)

    filename = f"{uuid.uuid4().hex}_{secure_filename(file.filename)}"
    filepath = os.path.join(Config.COVERS_FOLDER, filename)

    # Redimensionner
    img = Image.open(file.stream)
    img.thumbnail((600, 900), Image.Resampling.LANCZOS)

    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')

    img.save(filepath, 'JPEG', quality=85)
    return f"/uploads/covers/{filename}"


def save_chapter_images(files, manga_id, chapter_number):
    """Sauvegarde les pages d'un chapitre (images individuelles)"""
    chapter_dir = os.path.join(
        Config.CHAPTERS_FOLDER,
        str(manga_id),
        str(chapter_number)
    )
    os.makedirs(chapter_dir, exist_ok=True)

    pages = []
    for i, file in enumerate(sorted(files, key=lambda f: f.filename)):
        if allowed_image(file.filename):
            ext = file.filename.rsplit('.', 1)[1].lower()
            filename = f"page_{i + 1:04d}.{ext}"
            filepath = os.path.join(chapter_dir, filename)

            img = Image.open(file.stream)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            img.save(filepath, 'JPEG', quality=90)

            pages.append(f"/uploads/chapters/{manga_id}/{chapter_number}/{filename}")

    return pages


def save_chapter_pdf(pdf_file, manga_id, chapter_number):
    """Extrait les pages d'un PDF et les sauvegarde en images"""
    chapter_dir = os.path.join(
        Config.CHAPTERS_FOLDER,
        str(manga_id),
        str(chapter_number)
    )
    os.makedirs(chapter_dir, exist_ok=True)

    pages = []

    try:
        # Lire le PDF
        pdf_reader = PdfReader(pdf_file.stream)

        for i, page in enumerate(pdf_reader.pages):
            # Extraire les images de chaque page
            if '/XObject' in page['/Resources']:
                x_objects = page['/Resources']['/XObject'].get_object()

                img_count = 0
                for obj_name in x_objects:
                    obj = x_objects[obj_name].get_object()

                    if obj['/Subtype'] == '/Image':
                        img_count += 1
                        data = obj.get_data()

                        # Tenter de charger comme image
                        try:
                            img = Image.open(io.BytesIO(data))
                            filename = f"page_{i + 1:04d}_{img_count:02d}.jpg"
                            filepath = os.path.join(chapter_dir, filename)

                            if img.mode in ('RGBA', 'P'):
                                img = img.convert('RGB')

                            img.save(filepath, 'JPEG', quality=90)
                            pages.append(
                                f"/uploads/chapters/{manga_id}/{chapter_number}/{filename}"
                            )
                        except Exception:
                            # Si l'image ne peut pas être lue, sauvegarder les données brutes
                            filename = f"page_{i + 1:04d}_{img_count:02d}.jpg"
                            filepath = os.path.join(chapter_dir, filename)
                            with open(filepath, 'wb') as f:
                                f.write(data)
                            pages.append(
                                f"/uploads/chapters/{manga_id}/{chapter_number}/{filename}"
                            )

        # Si aucune image trouvée dans le PDF, informer
        if not pages:
            # Fallback : sauvegarder chaque page comme info
            return []

    except Exception as e:
        print(f"Erreur PDF: {e}")
        return []

    return pages


def delete_chapter_files(manga_id, chapter_number):
    """Supprime les fichiers d'un chapitre"""
    chapter_dir = os.path.join(
        Config.CHAPTERS_FOLDER,
        str(manga_id),
        str(chapter_number)
    )
    if os.path.exists(chapter_dir):
        import shutil
        shutil.rmtree(chapter_dir)


def delete_cover_file(cover_path):
    """Supprime un fichier de couverture"""
    if cover_path and cover_path.startswith('/uploads/covers/'):
        full_path = os.path.join(Config.UPLOAD_FOLDER, cover_path.lstrip('/uploads/'))
        actual_path = os.path.join(Config.COVERS_FOLDER, os.path.basename(cover_path))
        if os.path.exists(actual_path):
            os.remove(actual_path)