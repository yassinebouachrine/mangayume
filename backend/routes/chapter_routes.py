from flask import Blueprint, request, jsonify
from models import db, Chapter, Manga
from auth import admin_required
from utils import save_chapter_images, save_chapter_pdf, delete_chapter_files
from datetime import datetime

chapter_bp = Blueprint('chapters', __name__)


# ─── DERNIERS CHAPITRES ──────────────────
@chapter_bp.route('/latest', methods=['GET'])
def get_latest_chapters():
    limit = request.args.get('limit', 30, type=int)
    chapters = Chapter.query.order_by(Chapter.released_at.desc()).limit(limit).all()

    result = []
    for ch in chapters:
        manga = Manga.query.get(ch.manga_id)
        ch_data = ch.to_dict()
        ch_data['manga'] = {
            'id': manga.id,
            'title': manga.title,
            'cover_image': manga.cover_image,
            'type': manga.type
        } if manga else None
        result.append(ch_data)

    return jsonify(result)


# ─── DÉTAIL D'UN CHAPITRE ────────────────
@chapter_bp.route('/<int:chapter_id>', methods=['GET'])
def get_chapter(chapter_id):
    chapter = Chapter.query.get_or_404(chapter_id)

    # Incrémenter les vues
    chapter.views += 1
    db.session.commit()

    # Navigation : précédent / suivant
    prev_chapter = Chapter.query.filter(
        Chapter.manga_id == chapter.manga_id,
        Chapter.number < chapter.number
    ).order_by(Chapter.number.desc()).first()

    next_chapter = Chapter.query.filter(
        Chapter.manga_id == chapter.manga_id,
        Chapter.number > chapter.number
    ).order_by(Chapter.number.asc()).first()

    manga = Manga.query.get(chapter.manga_id)

    return jsonify({
        'chapter': chapter.to_dict(include_pages=True),
        'manga': {
            'id': manga.id,
            'title': manga.title,
            'cover_image': manga.cover_image,
            'type': manga.type
        } if manga else None,
        'navigation': {
            'prev': {'id': prev_chapter.id, 'number': prev_chapter.number,
                     'title': prev_chapter.title} if prev_chapter else None,
            'next': {'id': next_chapter.id, 'number': next_chapter.number,
                     'title': next_chapter.title} if next_chapter else None
        }
    })


# ─── CRÉER UN CHAPITRE (Admin) ───────────
@chapter_bp.route('', methods=['POST'])
@admin_required
def create_chapter():
    manga_id = request.form.get('manga_id', type=int)
    number = request.form.get('number', type=float)
    title = request.form.get('title', '').strip()

    if not manga_id:
        return jsonify({'error': 'manga_id est requis'}), 400
    if number is None:
        return jsonify({'error': 'Le numéro de chapitre est requis'}), 400

    manga = Manga.query.get_or_404(manga_id)

    # Vérifier doublon
    existing = Chapter.query.filter_by(manga_id=manga_id, number=number).first()
    if existing:
        return jsonify({'error': f'Le chapitre {number} existe déjà'}), 400

    pages = []

    # Option 1 : Upload d'images individuelles
    if 'pages' in request.files:
        files = request.files.getlist('pages')
        if files:
            pages = save_chapter_images(files, manga_id, number)

    # Option 2 : Upload d'un PDF
    elif 'pdf' in request.files:
        pdf_file = request.files['pdf']
        if pdf_file:
            pages = save_chapter_pdf(pdf_file, manga_id, number)

    if not pages:
        return jsonify({'error': 'Aucune page fournie. Envoyez des images ou un PDF.'}), 400

    chapter = Chapter(
        manga_id=manga_id,
        number=number,
        title=title or f'Chapitre {number}',
        released_at=datetime.utcnow()
    )
    chapter.set_pages(pages)

    db.session.add(chapter)

    # Mettre à jour la date du manga
    manga.updated_at = datetime.utcnow()

    db.session.commit()

    return jsonify(chapter.to_dict()), 201


# ─── MODIFIER UN CHAPITRE (Admin) ────────
@chapter_bp.route('/<int:chapter_id>', methods=['PUT'])
@admin_required
def update_chapter(chapter_id):
    chapter = Chapter.query.get_or_404(chapter_id)

    title = request.form.get('title', chapter.title)
    chapter.title = title

    # Nouvelles pages
    if 'pages' in request.files:
        files = request.files.getlist('pages')
        if files:
            delete_chapter_files(chapter.manga_id, chapter.number)
            pages = save_chapter_images(files, chapter.manga_id, chapter.number)
            chapter.set_pages(pages)

    elif 'pdf' in request.files:
        pdf_file = request.files['pdf']
        if pdf_file:
            delete_chapter_files(chapter.manga_id, chapter.number)
            pages = save_chapter_pdf(pdf_file, chapter.manga_id, chapter.number)
            chapter.set_pages(pages)

    db.session.commit()
    return jsonify(chapter.to_dict())


# ─── SUPPRIMER UN CHAPITRE (Admin) ───────
@chapter_bp.route('/<int:chapter_id>', methods=['DELETE'])
@admin_required
def delete_chapter(chapter_id):
    chapter = Chapter.query.get_or_404(chapter_id)

    delete_chapter_files(chapter.manga_id, chapter.number)
    db.session.delete(chapter)
    db.session.commit()

    return jsonify({'message': 'Chapitre supprimé'})