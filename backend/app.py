import os
import uuid
import json
import shutil
import traceback
from datetime import timedelta, datetime

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required,
    get_jwt_identity, verify_jwt_in_request
)
from werkzeug.utils import secure_filename
from PIL import Image as PILImage
from sqlalchemy import or_

from config import Config
from models import (
    db, User, Genre, Manga, Chapter, Comment, CommentLike, Rating,
    manga_genres, user_favorites, Message
)


def create_app():
    app = app = Flask(__name__)
    app.config.from_object(Config)
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=30)
    app.config['JWT_TOKEN_LOCATION'] = ['headers']
    app.config['JWT_HEADER_NAME'] = 'Authorization'
    app.config['JWT_HEADER_TYPE'] = 'Bearer'

    CORS(app, resources={r"/api/*": {"origins": "*"}})
    db.init_app(app)
    jwt = JWTManager(app)

    # ── Gestion des erreurs JWT ──
    @jwt.invalid_token_loader
    def invalid_token_callback(error_string):
        print(f"[JWT] Token invalide: {error_string}")
        return jsonify({'error': f'Token invalide: {error_string}'}), 401

    @jwt.unauthorized_loader
    def missing_token_callback(error_string):
        print(f"[JWT] Token manquant: {error_string}")
        return jsonify({'error': 'Token d\'authentification requis'}), 401

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        print(f"[JWT] Token expiré")
        return jsonify({'error': 'Token expiré, reconnectez-vous'}), 401

    os.makedirs(Config.COVERS_FOLDER, exist_ok=True)
    os.makedirs(Config.CHAPTERS_FOLDER, exist_ok=True)

    # ══════════════════════════════════════════
    # HELPERS
    # ══════════════════════════════════════════
    ALLOWED_IMG = {'png', 'jpg', 'jpeg', 'webp', 'gif'}

    def allowed_img(fn):
        return '.' in fn and fn.rsplit('.', 1)[1].lower() in ALLOWED_IMG

    def save_cover(file_obj):
        if not file_obj or not file_obj.filename:
            return None
        if not allowed_img(file_obj.filename):
            return None
        os.makedirs(Config.COVERS_FOLDER, exist_ok=True)
        ext = file_obj.filename.rsplit('.', 1)[1].lower()
        fname = f"{uuid.uuid4().hex}.{ext}"
        fpath = os.path.join(Config.COVERS_FOLDER, fname)
        try:
            img = PILImage.open(file_obj.stream)
            img.thumbnail((600, 900), PILImage.Resampling.LANCZOS)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            img.save(fpath, 'JPEG', quality=85)
        except Exception as e:
            print(f"[COVER] Erreur PIL: {e}, sauvegarde directe")
            file_obj.stream.seek(0)
            file_obj.save(fpath)
        return f"/uploads/covers/{fname}"

    def save_chapter_page(file_obj, manga_id, chapter_num, page_num):
        chapter_dir = os.path.join(Config.CHAPTERS_FOLDER, str(manga_id), str(chapter_num))
        os.makedirs(chapter_dir, exist_ok=True)
        ext = file_obj.filename.rsplit('.', 1)[1].lower() if '.' in file_obj.filename else 'jpg'
        fname = f"page_{page_num:04d}.{ext}"
        fpath = os.path.join(chapter_dir, fname)
        try:
            img = PILImage.open(file_obj.stream)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            img.save(fpath, 'JPEG', quality=90)
        except Exception as e:
            print(f"[PAGE] Erreur PIL: {e}, sauvegarde directe")
            file_obj.stream.seek(0)
            file_obj.save(fpath)
        return f"/uploads/chapters/{manga_id}/{chapter_num}/{fname}"

    def get_optional_user():
        try:
            verify_jwt_in_request(optional=True)
            uid = get_jwt_identity()
            if uid:
                return User.query.get(uid)
        except Exception:
            pass
        return None

    def check_admin():
        """Vérifie que l'utilisateur courant est admin. Retourne (user, error_response)"""
        try:
            verify_jwt_in_request()
            uid = get_jwt_identity()
            user = User.query.get(uid)
            if not user:
                return None, (jsonify({'error': 'Utilisateur non trouvé'}), 401)
            if user.role != 'admin':
                return None, (jsonify({'error': 'Accès admin requis'}), 403)
            return user, None
        except Exception as e:
            print(f"[AUTH] Erreur check_admin: {e}")
            return None, (jsonify({'error': f'Erreur auth: {str(e)}'}), 401)

    def check_user():
        """Vérifie que l'utilisateur est connecté. Retourne (user, error_response)"""
        try:
            verify_jwt_in_request()
            uid = get_jwt_identity()
            user = User.query.get(uid)
            if not user:
                return None, (jsonify({'error': 'Utilisateur non trouvé'}), 401)
            return user, None
        except Exception as e:
            print(f"[AUTH] Erreur check_user: {e}")
            return None, (jsonify({'error': f'Erreur auth: {str(e)}'}), 401)

    # ══════════════════════════════════════════
    # FICHIERS STATIQUES
    # ══════════════════════════════════════════
    @app.route('/uploads/<path:filename>')
    def serve_upload(filename):
        return send_from_directory(Config.UPLOAD_FOLDER, filename)

    @app.route('/api/health')
    def health():
        return jsonify({'status': 'OK', 'app': 'MangaYume'})

    # ══════════════════════════════════════════
    # AUTH
    # ══════════════════════════════════════════
    @app.route('/api/auth/register', methods=['POST'])
    def register():
        try:
            data = request.get_json(force=True, silent=True)
            if not data:
                return jsonify({'error': 'Données requises'}), 400

            username = (data.get('username') or '').strip()
            email = (data.get('email') or '').strip().lower()
            password = data.get('password') or ''

            if not username or len(username) < 3:
                return jsonify({'error': 'Pseudo: 3 caractères minimum'}), 400
            if not email or '@' not in email:
                return jsonify({'error': 'Email invalide'}), 400
            if len(password) < 6:
                return jsonify({'error': 'Mot de passe: 6 caractères minimum'}), 400

            if User.query.filter_by(email=email).first():
                return jsonify({'error': 'Email déjà utilisé'}), 400
            if User.query.filter_by(username=username).first():
                return jsonify({'error': 'Pseudo déjà pris'}), 400

            user = User(username=username, email=email)
            user.set_password(password)
            db.session.add(user)
            db.session.commit()

            token = create_access_token(identity=str(user.id))
            return jsonify({
                'user': {**user.to_dict(include_email=True), 'favorites': []},
                'token': token
            }), 201
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/auth/login', methods=['POST'])
    def login():
        try:
            data = request.get_json(force=True, silent=True)
            if not data:
                return jsonify({'error': 'Données requises'}), 400

            email = (data.get('email') or '').strip().lower()
            password = data.get('password') or ''

            user = User.query.filter_by(email=email).first()
            if not user or not user.check_password(password):
                return jsonify({'error': 'Email ou mot de passe incorrect'}), 401

            token = create_access_token(identity=str(user.id))
            fav_ids = [m.id for m in user.favorites]

            return jsonify({
                'user': {**user.to_dict(include_email=True), 'favorites': fav_ids},
                'token': token
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/auth/profile', methods=['GET'])
    def get_profile():
        user, err = check_user()
        if err:
            return err
        try:
            fav_ids = [m.id for m in user.favorites]
            return jsonify({**user.to_dict(include_email=True), 'favorites': fav_ids})
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/auth/favorites/<int:manga_id>', methods=['POST'])
    def toggle_favorite(manga_id):
        user, err = check_user()
        if err:
            return err
        try:
            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            is_fav = manga in user.favorites
            if is_fav:
                user.favorites.remove(manga)
            else:
                user.favorites.append(manga)
            db.session.commit()

            return jsonify({
                'is_favorite': not is_fav,
                'favorites': [m.id for m in user.favorites]
            })
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/auth/favorites', methods=['GET'])
    def get_favorites():
        user, err = check_user()
        if err:
            return err
        try:
            return jsonify({'favorites': [m.to_card() for m in user.favorites]})
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # GENRES
    # ══════════════════════════════════════════
    @app.route('/api/manga/genres', methods=['GET'])
    def get_genres():
        try:
            genres = Genre.query.order_by(Genre.name).all()
            result = []
            for g in genres:
                count = db.session.query(manga_genres).filter(
                    manga_genres.c.genre_id == g.id
                ).count()
                result.append({**g.to_dict(), 'count': count})
            return jsonify(result)
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # MANGA - LECTURE
    # ══════════════════════════════════════════
    @app.route('/api/manga', methods=['GET'])
    def get_mangas():
        try:
            page = request.args.get('page', 1, type=int)
            limit = request.args.get('limit', 20, type=int)
            sort = request.args.get('sort', '-updated_at')
            mtype = request.args.get('type', '')
            status = request.args.get('status', '')
            genres_param = request.args.get('genres', '')
            search = request.args.get('search', '')
            featured = request.args.get('featured', '')

            query = Manga.query

            if mtype:
                query = query.filter(Manga.type.in_(mtype.split(',')))
            if status:
                query = query.filter(Manga.status.in_(status.split(',')))
            if search:
                term = f"%{search}%"
                query = query.filter(or_(
                    Manga.title.ilike(term),
                    Manga.alternative_titles.ilike(term),
                    Manga.author.ilike(term)
                ))
            if featured == 'true':
                query = query.filter(Manga.is_featured == True)
            if genres_param:
                for slug in genres_param.split(','):
                    slug = slug.strip()
                    if slug:
                        genre = Genre.query.filter_by(slug=slug).first()
                        if genre:
                            query = query.filter(Manga.genres.any(Genre.id == genre.id))

            sort_map = {
                '-updated_at': Manga.updated_at.desc(),
                'updated_at': Manga.updated_at.asc(),
                '-views': Manga.views.desc(),
                'title': Manga.title.asc(),
                '-title': Manga.title.desc(),
                '-created_at': Manga.created_at.desc(),
                '-rating': Manga.rating_sum.desc(),
            }
            query = query.order_by(sort_map.get(sort, Manga.updated_at.desc()))

            total = query.count()
            mangas = query.offset((page - 1) * limit).limit(limit).all()

            return jsonify({
                'mangas': [m.to_card() for m in mangas],
                'pagination': {
                    'current': page,
                    'pages': max(1, -(-total // limit)),
                    'total': total,
                    'limit': limit
                }
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/featured', methods=['GET'])
    def get_featured():
        try:
            mangas = Manga.query.filter_by(is_featured=True) \
                .order_by(Manga.updated_at.desc()).limit(8).all()
            return jsonify([m.to_dict() for m in mangas])
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/popular', methods=['GET'])
    def get_popular():
        try:
            limit = request.args.get('limit', 10, type=int)
            mangas = Manga.query.order_by(Manga.views.desc()).limit(limit).all()
            return jsonify([m.to_card() for m in mangas])
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/latest', methods=['GET'])
    def get_latest():
        try:
            limit = request.args.get('limit', 20, type=int)
            mangas = Manga.query.order_by(Manga.updated_at.desc()).limit(limit).all()
            return jsonify([m.to_card() for m in mangas])
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/<int:manga_id>', methods=['GET'])
    def get_manga(manga_id):
        try:
            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            manga.views = (manga.views or 0) + 1
            db.session.commit()

            chapters = Chapter.query.filter_by(manga_id=manga_id) \
                .order_by(Chapter.number.desc()).all()

            is_fav = False
            user = get_optional_user()
            if user:
                is_fav = manga in user.favorites

            return jsonify({
                'manga': manga.to_dict(),
                'chapters': [ch.to_dict() for ch in chapters],
                'is_favorite': is_fav
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # MANGA - CRUD ADMIN
    # ══════════════════════════════════════════
    @app.route('/api/manga', methods=['POST'])
    def create_manga():
        admin, err = check_admin()
        if err:
            return err
        try:
            print("[CREATE MANGA] Form data reçue:")
            print(f"  title: {request.form.get('title')}")
            print(f"  author: {request.form.get('author')}")
            print(f"  files: {list(request.files.keys())}")

            title = (request.form.get('title') or '').strip()
            description = (request.form.get('description') or '').strip()
            manga_type = request.form.get('type', 'manga')
            status = request.form.get('status', 'ongoing')
            author = (request.form.get('author') or '').strip()
            artist = (request.form.get('artist') or '').strip()
            alt_titles = request.form.get('alternative_titles', '')
            is_featured = request.form.get('is_featured', 'false') == 'true'

            year_str = request.form.get('year', '')
            year = int(year_str) if year_str and year_str.strip().isdigit() else 2024

            if not title:
                return jsonify({'error': 'Le titre est requis'}), 400
            if not description:
                return jsonify({'error': 'La description est requise'}), 400
            if not author:
                return jsonify({'error': "L'auteur est requis"}), 400

            # Cover
            cover_image = ''
            if 'cover' in request.files:
                f = request.files['cover']
                if f and f.filename:
                    cover_image = save_cover(f)
                    print(f"  cover sauvée: {cover_image}")

            if not cover_image:
                cover_url = request.form.get('cover_url', '').strip()
                if cover_url:
                    cover_image = cover_url
                else:
                    return jsonify({'error': 'Image de couverture requise'}), 400

            manga = Manga(
                title=title,
                description=description,
                cover_image=cover_image,
                type=manga_type,
                status=status,
                author=author,
                artist=artist,
                year=year,
                alternative_titles=alt_titles,
                is_featured=is_featured,
                updated_at=datetime.utcnow()
            )

            # Genres
            genre_ids = request.form.getlist('genres')
            print(f"  genre_ids: {genre_ids}")
            for gid in genre_ids:
                try:
                    genre = Genre.query.get(int(gid))
                    if genre:
                        manga.genres.append(genre)
                except (ValueError, TypeError):
                    pass

            db.session.add(manga)
            db.session.commit()
            print(f"[CREATE MANGA] Succès! ID={manga.id}")

            return jsonify(manga.to_dict()), 201

        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': f'Erreur serveur: {str(e)}'}), 500

    @app.route('/api/manga/<int:manga_id>', methods=['PUT'])
    def update_manga(manga_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            if request.form.get('title'):
                manga.title = request.form['title'].strip()
            if request.form.get('description'):
                manga.description = request.form['description'].strip()
            if request.form.get('type'):
                manga.type = request.form['type']
            if request.form.get('status'):
                manga.status = request.form['status']
            if request.form.get('author'):
                manga.author = request.form['author'].strip()
            if request.form.get('artist') is not None:
                manga.artist = (request.form.get('artist') or '').strip()
            if request.form.get('alternative_titles') is not None:
                manga.alternative_titles = request.form.get('alternative_titles', '')

            year_str = request.form.get('year', '')
            if year_str and year_str.strip().isdigit():
                manga.year = int(year_str)

            if request.form.get('is_featured') is not None:
                manga.is_featured = request.form['is_featured'] == 'true'

            if 'cover' in request.files:
                f = request.files['cover']
                if f and f.filename:
                    new_cover = save_cover(f)
                    if new_cover:
                        manga.cover_image = new_cover

            genre_ids = request.form.getlist('genres')
            if genre_ids:
                manga.genres = []
                for gid in genre_ids:
                    try:
                        genre = Genre.query.get(int(gid))
                        if genre:
                            manga.genres.append(genre)
                    except (ValueError, TypeError):
                        pass

            manga.updated_at = datetime.utcnow()
            db.session.commit()

            return jsonify(manga.to_dict())
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/<int:manga_id>', methods=['DELETE'])
    def delete_manga(manga_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            ch_dir = os.path.join(Config.CHAPTERS_FOLDER, str(manga_id))
            if os.path.exists(ch_dir):
                shutil.rmtree(ch_dir)

            db.session.delete(manga)
            db.session.commit()
            return jsonify({'message': 'Manga supprimé'})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/manga/<int:manga_id>/rate', methods=['POST'])
    def rate_manga(manga_id):
        user, err = check_user()
        if err:
            return err
        try:
            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Non trouvé'}), 404

            data = request.get_json(force=True, silent=True) or {}
            score = data.get('score', 0)
            if not (1 <= score <= 5):
                return jsonify({'error': 'Note entre 1 et 5'}), 400

            existing = Rating.query.filter_by(user_id=user.id, manga_id=manga_id).first()
            if existing:
                manga.rating_sum = (manga.rating_sum or 0) - existing.score + score
                existing.score = score
            else:
                r = Rating(user_id=user.id, manga_id=manga_id, score=score)
                db.session.add(r)
                manga.rating_sum = (manga.rating_sum or 0) + score
                manga.rating_count = (manga.rating_count or 0) + 1

            db.session.commit()
            return jsonify({'rating': {'average': manga.rating_average, 'count': manga.rating_count}})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # CHAPTERS
    # ══════════════════════════════════════════
    @app.route('/api/chapters/latest', methods=['GET'])
    def get_latest_chapters():
        try:
            limit = request.args.get('limit', 30, type=int)
            chapters = Chapter.query.order_by(Chapter.released_at.desc()).limit(limit).all()
            result = []
            for ch in chapters:
                manga = Manga.query.get(ch.manga_id)
                d = ch.to_dict()
                d['manga'] = {
                    'id': manga.id, 'title': manga.title,
                    'cover_image': manga.cover_image, 'type': manga.type
                } if manga else None
                result.append(d)
            return jsonify(result)
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/chapters/<int:chapter_id>', methods=['GET'])
    def get_chapter(chapter_id):
        try:
            chapter = Chapter.query.get(chapter_id)
            if not chapter:
                return jsonify({'error': 'Chapitre non trouvé'}), 404

            chapter.views = (chapter.views or 0) + 1
            db.session.commit()

            prev_ch = Chapter.query.filter(
                Chapter.manga_id == chapter.manga_id,
                Chapter.number < chapter.number
            ).order_by(Chapter.number.desc()).first()

            next_ch = Chapter.query.filter(
                Chapter.manga_id == chapter.manga_id,
                Chapter.number > chapter.number
            ).order_by(Chapter.number.asc()).first()

            manga = Manga.query.get(chapter.manga_id)

            return jsonify({
                'chapter': chapter.to_dict(include_pages=True),
                'manga': {
                    'id': manga.id, 'title': manga.title,
                    'cover_image': manga.cover_image, 'type': manga.type
                } if manga else None,
                'navigation': {
                    'prev': {'id': prev_ch.id, 'number': prev_ch.number,
                             'title': prev_ch.title} if prev_ch else None,
                    'next': {'id': next_ch.id, 'number': next_ch.number,
                             'title': next_ch.title} if next_ch else None
                }
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/chapters', methods=['POST'])
    def create_chapter():
        admin, err = check_admin()
        if err:
            return err
        try:
            manga_id = request.form.get('manga_id', type=int)
            number = request.form.get('number', type=float)
            title = (request.form.get('title') or '').strip()
            pages_count = request.form.get('pages_count', 0, type=int)

            print(f"[CREATE CHAPTER] manga_id={manga_id}, number={number}, pages_count={pages_count}")

            if not manga_id:
                return jsonify({'error': 'manga_id requis'}), 400
            if number is None:
                return jsonify({'error': 'Numéro de chapitre requis'}), 400

            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            existing = Chapter.query.filter_by(manga_id=manga_id, number=number).first()
            if existing:
                return jsonify({'error': f'Le chapitre {number} existe déjà'}), 400

            pages = []

            # Pages numérotées individuellement
            if pages_count > 0:
                for i in range(1, pages_count + 1):
                    key = f'page_{i}'
                    if key in request.files:
                        f = request.files[key]
                        if f and f.filename:
                            path = save_chapter_page(f, manga_id, number, i)
                            pages.append(path)
                            print(f"  Page {i} sauvée: {path}")

            # Fallback: toutes les pages dans 'pages'
            if not pages and 'pages' in request.files:
                files = request.files.getlist('pages')
                for i, f in enumerate(files, 1):
                    if f and f.filename and allowed_img(f.filename):
                        path = save_chapter_page(f, manga_id, number, i)
                        pages.append(path)

            if not pages:
                return jsonify({'error': 'Aucune page uploadée'}), 400

            chapter = Chapter(
                manga_id=manga_id,
                number=number,
                title=title or f'Chapitre {int(number)}',
                released_at=datetime.utcnow()
            )
            chapter.set_pages(pages)

            db.session.add(chapter)
            manga.updated_at = datetime.utcnow()
            db.session.commit()

            print(f"[CREATE CHAPTER] Succès! {len(pages)} pages")
            return jsonify(chapter.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': f'Erreur: {str(e)}'}), 500

    @app.route('/api/chapters/<int:chapter_id>', methods=['DELETE'])
    def delete_chapter(chapter_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            chapter = Chapter.query.get(chapter_id)
            if not chapter:
                return jsonify({'error': 'Chapitre non trouvé'}), 404

            ch_dir = os.path.join(Config.CHAPTERS_FOLDER, str(chapter.manga_id), str(chapter.number))
            if os.path.exists(ch_dir):
                shutil.rmtree(ch_dir)

            db.session.delete(chapter)
            db.session.commit()
            return jsonify({'message': 'Chapitre supprimé'})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # COMMENTS
    # ══════════════════════════════════════════
    @app.route('/api/comments/manga/<int:manga_id>', methods=['GET'])
    def get_comments(manga_id):
        try:
            page = request.args.get('page', 1, type=int)
            limit = request.args.get('limit', 20, type=int)

            query = Comment.query.filter_by(
                manga_id=manga_id,
                parent_id=None,
                is_deleted=False
            ).order_by(Comment.created_at.desc())

            total = query.count()
            comments = query.offset((page - 1) * limit).limit(limit).all()

            return jsonify({
                'comments': [c.to_dict() for c in comments],
                'pagination': {
                    'current': page,
                    'pages': max(1, -(-total // limit)),
                    'total': total
                }
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/comments', methods=['POST'])
    def create_comment():
        user, err = check_user()
        if err:
            return err
        try:
            data = request.get_json(force=True, silent=True)
            print(f"[COMMENT] user={user.id}, data={data}")

            if not data:
                return jsonify({'error': 'Données JSON requises'}), 400

            content = (data.get('content') or '').strip()
            manga_id = data.get('manga_id')
            chapter_id = data.get('chapter_id')
            parent_id = data.get('parent_id')
            is_spoiler = data.get('is_spoiler', False)

            if not content:
                return jsonify({'error': 'Commentaire vide'}), 400
            if not manga_id:
                return jsonify({'error': 'manga_id requis'}), 400
            if len(content) > 2000:
                return jsonify({'error': 'Max 2000 caractères'}), 400

            manga = Manga.query.get(manga_id)
            if not manga:
                return jsonify({'error': 'Manga non trouvé'}), 404

            comment = Comment(
                user_id=user.id,
                manga_id=int(manga_id),
                chapter_id=int(chapter_id) if chapter_id else None,
                parent_id=int(parent_id) if parent_id else None,
                content=content,
                is_spoiler=bool(is_spoiler)
            )

            db.session.add(comment)
            db.session.commit()
            print(f"[COMMENT] Créé! ID={comment.id}")

            return jsonify(comment.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': f'Erreur: {str(e)}'}), 500

    @app.route('/api/comments/<int:comment_id>', methods=['PUT'])
    def update_comment(comment_id):
        user, err = check_user()
        if err:
            return err
        try:
            comment = Comment.query.get(comment_id)
            if not comment:
                return jsonify({'error': 'Non trouvé'}), 404
            if comment.user_id != user.id:
                return jsonify({'error': 'Non autorisé'}), 403

            data = request.get_json(force=True, silent=True) or {}
            content = (data.get('content') or '').strip()
            if not content:
                return jsonify({'error': 'Commentaire vide'}), 400

            comment.content = content
            comment.is_edited = True
            if 'is_spoiler' in data:
                comment.is_spoiler = bool(data['is_spoiler'])
            db.session.commit()

            return jsonify(comment.to_dict())
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/comments/<int:comment_id>', methods=['DELETE'])
    def delete_comment(comment_id):
        user, err = check_user()
        if err:
            return err
        try:
            comment = Comment.query.get(comment_id)
            if not comment:
                return jsonify({'error': 'Non trouvé'}), 404
            if comment.user_id != user.id and user.role != 'admin':
                return jsonify({'error': 'Non autorisé'}), 403

            comment.is_deleted = True
            comment.content = '[Commentaire supprimé]'
            db.session.commit()
            return jsonify({'message': 'Supprimé'})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/comments/<int:comment_id>/like', methods=['POST'])
    def like_comment(comment_id):
        user, err = check_user()
        if err:
            return err
        try:
            comment = Comment.query.get(comment_id)
            if not comment:
                return jsonify({'error': 'Non trouvé'}), 404

            existing = CommentLike.query.filter_by(
                user_id=user.id, comment_id=comment_id
            ).first()

            if existing:
                if existing.is_like:
                    db.session.delete(existing)
                    comment.likes_count = max(0, (comment.likes_count or 0) - 1)
                else:
                    existing.is_like = True
                    comment.likes_count = (comment.likes_count or 0) + 2
            else:
                cl = CommentLike(user_id=user.id, comment_id=comment_id, is_like=True)
                db.session.add(cl)
                comment.likes_count = (comment.likes_count or 0) + 1

            db.session.commit()
            return jsonify({'likes_count': comment.likes_count})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500



    # ══════════════════════════════════════════
    # MESSAGES / CONTACT
    # ══════════════════════════════════════════
    @app.route('/api/messages', methods=['POST'])
    def send_message():
        user, err = check_user()
        if err:
            return err
        try:
            data = request.get_json(force=True, silent=True) or {}
            subject = (data.get('subject') or '').strip()
            content = (data.get('content') or '').strip()

            if not subject or len(subject) < 3:
                return jsonify({'error': 'Sujet requis (3 car. min)'}), 400
            if not content or len(content) < 10:
                return jsonify({'error': 'Message requis (10 car. min)'}), 400

            msg = Message(user_id=user.id, subject=subject, content=content)
            db.session.add(msg)
            db.session.commit()
            return jsonify(msg.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/messages/my', methods=['GET'])
    def get_my_messages():
        user, err = check_user()
        if err:
            return err
        try:
            msgs = Message.query.filter_by(user_id=user.id)\
                .order_by(Message.created_at.desc()).all()
            return jsonify([m.to_dict() for m in msgs])
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/messages/all', methods=['GET'])
    def get_all_messages():
        admin, err = check_admin()
        if err:
            return err
        try:
            page = request.args.get('page', 1, type=int)
            limit = request.args.get('limit', 20, type=int)
            status = request.args.get('status', '')

            query = Message.query

            if status == 'unread':
                query = query.filter_by(is_read=False)
            elif status == 'read':
                query = query.filter_by(is_read=True)
            elif status == 'replied':
                query = query.filter(Message.admin_reply != '', Message.admin_reply != None)
            elif status == 'unreplied':
                query = query.filter((Message.admin_reply == '') | (Message.admin_reply == None))

            query = query.order_by(Message.created_at.desc())
            total = query.count()
            msgs = query.offset((page - 1) * limit).limit(limit).all()

            return jsonify({
                'messages': [m.to_dict() for m in msgs],
                'pagination': {
                    'current': page,
                    'pages': max(1, -(-total // limit)),
                    'total': total
                }
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/messages/<int:msg_id>/reply', methods=['POST'])
    def reply_message(msg_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            data = request.get_json(force=True, silent=True) or {}
            reply = (data.get('reply') or '').strip()
            if not reply:
                return jsonify({'error': 'Réponse requise'}), 400

            msg = Message.query.get(msg_id)
            if not msg:
                return jsonify({'error': 'Message non trouvé'}), 404

            msg.admin_reply = reply
            msg.is_read = True
            msg.replied_at = datetime.utcnow()
            db.session.commit()
            return jsonify(msg.to_dict())
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/messages/<int:msg_id>/read', methods=['POST'])
    def mark_read(msg_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            msg = Message.query.get(msg_id)
            if not msg:
                return jsonify({'error': 'Non trouvé'}), 404
            msg.is_read = True
            db.session.commit()
            return jsonify({'ok': True})
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/messages/<int:msg_id>', methods=['DELETE'])
    def delete_message(msg_id):
        admin, err = check_admin()
        if err:
            return err
        try:
            msg = Message.query.get(msg_id)
            if not msg:
                return jsonify({'error': 'Non trouvé'}), 404
            db.session.delete(msg)
            db.session.commit()
            return jsonify({'message': 'Supprimé'})
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500



    # ══════════════════════════════════════════
    # USER PROFILE MANAGEMENT
    # ══════════════════════════════════════════
    @app.route('/api/auth/update-profile', methods=['PUT'])
    def update_own_profile():
        user, err = check_user()
        if err:
            return err
        try:
            data = request.get_json(force=True, silent=True) or {}

            new_username = (data.get('username') or '').strip()
            new_password = data.get('password') or ''
            current_password = data.get('current_password') or ''

            # Verify current password
            if not current_password:
                return jsonify({'error': 'Mot de passe actuel requis'}), 400
            if not user.check_password(current_password):
                return jsonify({'error': 'Mot de passe actuel incorrect'}), 403

            changed = []

            if new_username and new_username != user.username:
                if len(new_username) < 3:
                    return jsonify({'error': 'Pseudo: 3 caractères minimum'}), 400
                existing = User.query.filter(
                    User.username == new_username,
                    User.id != user.id
                ).first()
                if existing:
                    return jsonify({'error': 'Ce pseudo est déjà pris'}), 400
                user.username = new_username
                changed.append('username')

            if new_password:
                if len(new_password) < 6:
                    return jsonify({'error': 'Nouveau mot de passe: 6 caractères minimum'}), 400
                user.set_password(new_password)
                changed.append('password')

            if not changed:
                return jsonify({'error': 'Aucune modification'}), 400

            db.session.commit()

            return jsonify({
                'user': user.to_dict(include_email=True),
                'changed': changed
            })
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    # ══════════════════════════════════════════
    # ADMIN — USER MANAGEMENT
    # ══════════════════════════════════════════
    @app.route('/api/admin/users', methods=['GET'])
    def admin_get_users():
        admin_user, err = check_admin()
        if err:
            return err
        try:
            page = request.args.get('page', 1, type=int)
            limit = request.args.get('limit', 20, type=int)
            search = request.args.get('search', '').strip()

            query = User.query

            if search:
                term = f"%{search}%"
                query = query.filter(or_(
                    User.username.ilike(term),
                    User.email.ilike(term),
                    db.cast(User.id, db.String).ilike(term)
                ))

            query = query.order_by(User.created_at.desc())
            total = query.count()
            users = query.offset((page - 1) * limit).limit(limit).all()

            result = []
            for u in users:
                ud = u.to_dict(include_email=True)
                ud['comments_count'] = Comment.query.filter_by(user_id=u.id, is_deleted=False).count()
                ud['favorites_count'] = len(u.favorites)
                result.append(ud)

            return jsonify({
                'users': result,
                'pagination': {
                    'current': page,
                    'pages': max(1, -(-total // limit)),
                    'total': total
                }
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/admin/users/<int:user_id>', methods=['PUT'])
    def admin_update_user(user_id):
        admin_user, err = check_admin()
        if err:
            return err
        try:
            target = User.query.get(user_id)
            if not target:
                return jsonify({'error': 'Utilisateur non trouvé'}), 404

            data = request.get_json(force=True, silent=True) or {}

            new_username = (data.get('username') or '').strip()
            new_password = data.get('password') or ''
            new_role = data.get('role') or ''

            if new_username and new_username != target.username:
                if len(new_username) < 3:
                    return jsonify({'error': 'Pseudo: 3 caractères minimum'}), 400
                existing = User.query.filter(
                    User.username == new_username,
                    User.id != target.id
                ).first()
                if existing:
                    return jsonify({'error': 'Ce pseudo est déjà pris'}), 400
                target.username = new_username

            if new_password and len(new_password) >= 6:
                target.set_password(new_password)

            if new_role in ('user', 'admin'):
                target.role = new_role

            db.session.commit()

            ud = target.to_dict(include_email=True)
            ud['comments_count'] = Comment.query.filter_by(user_id=target.id, is_deleted=False).count()
            return jsonify(ud)
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/admin/users/<int:user_id>', methods=['DELETE'])
    def admin_delete_user(user_id):
        admin_user, err = check_admin()
        if err:
            return err
        try:
            target = User.query.get(user_id)
            if not target:
                return jsonify({'error': 'Utilisateur non trouvé'}), 404
            if target.id == admin_user.id:
                return jsonify({'error': 'Impossible de supprimer votre propre compte'}), 400
            if target.role == 'admin':
                return jsonify({'error': 'Impossible de supprimer un autre admin'}), 400

            db.session.delete(target)
            db.session.commit()
            return jsonify({'message': 'Utilisateur supprimé'})
        except Exception as e:
            db.session.rollback()
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500

    @app.route('/api/stats', methods=['GET'])
    def get_stats():
        admin_user, err = check_admin()
        if err:
            return err
        try:
            from sqlalchemy import func as sqlfunc

            total_users = User.query.count()
            total_mangas = Manga.query.count()
            total_chapters = Chapter.query.count()
            total_comments = Comment.query.filter_by(is_deleted=False).count()
            total_views = db.session.query(sqlfunc.coalesce(sqlfunc.sum(Manga.views), 0)).scalar()
            total_messages = Message.query.count()
            unread_messages = Message.query.filter_by(is_read=False).count()
            total_favorites = db.session.query(user_favorites).count()

            avg_rating = db.session.query(
                sqlfunc.coalesce(sqlfunc.avg(Rating.score), 0)
            ).scalar()

            type_stats = db.session.query(
                Manga.type, sqlfunc.count(Manga.id)
            ).group_by(Manga.type).all()

            status_stats = db.session.query(
                Manga.status, sqlfunc.count(Manga.id)
            ).group_by(Manga.status).all()

            genre_stats = []
            for g in Genre.query.all():
                count = db.session.query(manga_genres).filter(
                    manga_genres.c.genre_id == g.id
                ).count()
                if count > 0:
                    genre_stats.append({'name': g.name, 'slug': g.slug, 'count': count})
            genre_stats.sort(key=lambda x: x['count'], reverse=True)

            top_mangas = Manga.query.order_by(Manga.views.desc()).limit(8).all()
            recent_users = User.query.order_by(User.created_at.desc()).limit(8).all()

            admin_count = User.query.filter_by(role='admin').count()
            user_count = User.query.filter_by(role='user').count()

            return jsonify({
                'total_users': total_users,
                'admin_count': admin_count,
                'user_count': user_count,
                'total_mangas': total_mangas,
                'total_chapters': total_chapters,
                'total_comments': total_comments,
                'total_views': total_views,
                'total_messages': total_messages,
                'unread_messages': unread_messages,
                'total_favorites': total_favorites,
                'avg_rating': round(float(avg_rating), 1),
                'type_stats': [{'type': t, 'count': c} for t, c in type_stats],
                'status_stats': [{'status': s, 'count': c} for s, c in status_stats],
                'genre_stats': genre_stats[:20],
                'top_mangas': [{
                    'id': m.id, 'title': m.title,
                    'views': m.views, 'cover_image': m.cover_image,
                    'type': m.type, 'rating': m.rating_average
                } for m in top_mangas],
                'recent_users': [u.to_dict(include_email=True) for u in recent_users]
            })
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500


    # ══════════════════════════════════════════
    # COOKIES CONSENT
    # ══════════════════════════════════════════
    @app.route('/api/cookies/accept', methods=['POST'])
    def accept_cookies():
        try:
            data = request.get_json(force=True, silent=True) or {}
            # Log cookie consent (optional)
            return jsonify({'accepted': True})
        except Exception as e:
            return jsonify({'error': str(e)}), 500



    # ══════════════════════════════════════════
    # FRONTEND FALLBACK
    # ══════════════════════════════════════════
    # @app.route('/')
    # @app.route('/<path:path>')
    # def serve_frontend(path=''):
    #     if path and os.path.exists(os.path.join(app.static_folder, path)):
    #         return send_from_directory(app.static_folder, path)
    #     return send_from_directory(app.static_folder, 'index.html')

    @app.errorhandler(Exception)
    def handle_error(e):
        traceback.print_exc()
        return jsonify({'error': 'Erreur serveur interne', 'details': str(e)}), 500

    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    application = create_app()
    print('''
    ╔══════════════════════════════════════════════╗
    ║    MANGA YUME — Read Your Dreams        ║
    ║    http://localhost:5000                   ║
    ╚══════════════════════════════════════════════╝
    ''')
    application.run(debug=True, port=5000, host='0.0.0.0')