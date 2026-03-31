from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Manga, Genre, Chapter, Rating
from auth import admin_required, get_current_user
from utils import save_cover_image, delete_cover_file
from sqlalchemy import or_, func
import os
from datetime import datetime

manga_bp = Blueprint('manga', __name__)


# ─── GENRES ──────────────────────────────
@manga_bp.route('/genres', methods=['GET'])
def get_genres():
    genres = Genre.query.order_by(Genre.name).all()
    result = []
    for g in genres:
        result.append({
            **g.to_dict(),
            'count': g.mangas.count()
        })
    return jsonify(result)


# ─── LISTE DES MANGAS (avec filtres) ─────
@manga_bp.route('', methods=['GET'])
def get_mangas():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('limit', 20, type=int)
    sort = request.args.get('sort', '-updated_at')
    manga_type = request.args.get('type', '')
    status = request.args.get('status', '')
    genres = request.args.get('genres', '')
    search = request.args.get('search', '')
    author = request.args.get('author', '')
    min_rating = request.args.get('min_rating', 0, type=float)
    year = request.args.get('year', 0, type=int)
    featured = request.args.get('featured', '')

    query = Manga.query

    # Filtres
    if manga_type:
        types = manga_type.split(',')
        query = query.filter(Manga.type.in_(types))

    if status:
        statuses = status.split(',')
        query = query.filter(Manga.status.in_(statuses))

    if genres:
        genre_slugs = genres.split(',')
        for slug in genre_slugs:
            genre = Genre.query.filter_by(slug=slug).first()
            if genre:
                query = query.filter(Manga.genres.contains(genre))

    if search:
        search_term = f"%{search}%"
        query = query.filter(
            or_(
                Manga.title.ilike(search_term),
                Manga.alternative_titles.ilike(search_term),
                Manga.author.ilike(search_term),
                Manga.artist.ilike(search_term)
            )
        )

    if author:
        query = query.filter(Manga.author.ilike(f"%{author}%"))

    if year:
        query = query.filter(Manga.year == year)

    if featured == 'true':
        query = query.filter(Manga.is_featured == True)

    # Tri
    sort_map = {
        '-updated_at': Manga.updated_at.desc(),
        'updated_at': Manga.updated_at.asc(),
        '-views': Manga.views.desc(),
        'views': Manga.views.asc(),
        'title': Manga.title.asc(),
        '-title': Manga.title.desc(),
        '-created_at': Manga.created_at.desc(),
        'created_at': Manga.created_at.asc(),
        '-rating': Manga.rating_sum.desc(),
    }

    order = sort_map.get(sort, Manga.updated_at.desc())
    query = query.order_by(order)

    # Filtrage par note minimum (après requête car c'est calculé)
    # On fait un filtre brut pour l'instant
    if min_rating > 0:
        query = query.filter(
            Manga.rating_count > 0,
            (Manga.rating_sum / Manga.rating_count) >= min_rating
        )

    pagination = query.paginate(page=page, per_page=per_page, error_out=False)

    return jsonify({
        'mangas': [m.to_card_dict() for m in pagination.items],
        'pagination': {
            'current': pagination.page,
            'pages': pagination.pages,
            'total': pagination.total,
            'limit': per_page
        }
    })


# ─── FEATURED ─────────────────────────────
@manga_bp.route('/featured', methods=['GET'])
def get_featured():
    mangas = Manga.query.filter_by(is_featured=True)\
        .order_by(Manga.updated_at.desc()).limit(8).all()
    return jsonify([m.to_dict() for m in mangas])


# ─── POPULAR ──────────────────────────────
@manga_bp.route('/popular', methods=['GET'])
def get_popular():
    limit = request.args.get('limit', 10, type=int)
    mangas = Manga.query.order_by(Manga.views.desc()).limit(limit).all()
    return jsonify([m.to_card_dict() for m in mangas])


# ─── LATEST UPDATES ──────────────────────
@manga_bp.route('/latest', methods=['GET'])
def get_latest():
    limit = request.args.get('limit', 20, type=int)
    mangas = Manga.query.order_by(Manga.updated_at.desc()).limit(limit).all()
    return jsonify([m.to_card_dict() for m in mangas])


# ─── DÉTAIL D'UN MANGA ───────────────────
@manga_bp.route('/<int:manga_id>', methods=['GET'])
def get_manga(manga_id):
    manga = Manga.query.get_or_404(manga_id)

    # Incrémenter les vues
    manga.views += 1
    db.session.commit()

    # Chapitres
    chapters = Chapter.query.filter_by(manga_id=manga_id)\
        .order_by(Chapter.number.desc()).all()

    # Vérifier si favori
    is_favorite = False
    user = get_current_user()
    if user:
        is_favorite = manga in user.favorites

    return jsonify({
        'manga': manga.to_dict(),
        'chapters': [ch.to_dict() for ch in chapters],
        'is_favorite': is_favorite
    })


# ─── CRÉER UN MANGA (Admin) ──────────────
@manga_bp.route('', methods=['POST'])
@admin_required
def create_manga():
    # Accepter FormData (pour l'upload d'image)
    title = request.form.get('title', '').strip()
    description = request.form.get('description', '').strip()
    manga_type = request.form.get('type', 'manga')
    status = request.form.get('status', 'ongoing')
    author = request.form.get('author', '').strip()
    artist = request.form.get('artist', '').strip()
    year = request.form.get('year', type=int)
    alternative_titles = request.form.get('alternative_titles', '')
    genre_ids = request.form.getlist('genres')
    is_featured = request.form.get('is_featured', 'false') == 'true'

    if not title:
        return jsonify({'error': 'Le titre est requis'}), 400
    if not description:
        return jsonify({'error': 'La description est requise'}), 400
    if not author:
        return jsonify({'error': 'L\'auteur est requis'}), 400

    # Sauvegarder la couverture
    cover_image = ''
    if 'cover' in request.files:
        cover_file = request.files['cover']
        cover_image = save_cover_image(cover_file)
        if not cover_image:
            return jsonify({'error': 'Format d\'image non supporté'}), 400
    else:
        cover_image = request.form.get('cover_url', '')

    if not cover_image:
        return jsonify({'error': 'Une image de couverture est requise'}), 400

    manga = Manga(
        title=title,
        description=description,
        cover_image=cover_image,
        type=manga_type,
        status=status,
        author=author,
        artist=artist,
        year=year,
        alternative_titles=alternative_titles,
        is_featured=is_featured
    )

    # Ajouter les genres
    for gid in genre_ids:
        genre = Genre.query.get(int(gid))
        if genre:
            manga.genres.append(genre)

    db.session.add(manga)
    db.session.commit()

    return jsonify(manga.to_dict()), 201


# ─── MODIFIER UN MANGA (Admin) ───────────
@manga_bp.route('/<int:manga_id>', methods=['PUT'])
@admin_required
def update_manga(manga_id):
    manga = Manga.query.get_or_404(manga_id)

    title = request.form.get('title', manga.title).strip()
    description = request.form.get('description', manga.description).strip()
    manga_type = request.form.get('type', manga.type)
    status = request.form.get('status', manga.status)
    author = request.form.get('author', manga.author).strip()
    artist = request.form.get('artist', manga.artist).strip()
    year = request.form.get('year', manga.year, type=int)
    alternative_titles = request.form.get('alternative_titles', manga.alternative_titles)
    is_featured = request.form.get('is_featured', str(manga.is_featured)).lower() == 'true'

    manga.title = title
    manga.description = description
    manga.type = manga_type
    manga.status = status
    manga.author = author
    manga.artist = artist
    manga.year = year
    manga.alternative_titles = alternative_titles
    manga.is_featured = is_featured

    # Nouvelle couverture
    if 'cover' in request.files:
        cover_file = request.files['cover']
        new_cover = save_cover_image(cover_file)
        if new_cover:
            delete_cover_file(manga.cover_image)
            manga.cover_image = new_cover

    # Mettre à jour les genres
    genre_ids = request.form.getlist('genres')
    if genre_ids:
        manga.genres = []
        for gid in genre_ids:
            genre = Genre.query.get(int(gid))
            if genre:
                manga.genres.append(genre)

    manga.updated_at = datetime.utcnow()
    db.session.commit()

    return jsonify(manga.to_dict())


# ─── SUPPRIMER UN MANGA (Admin) ──────────
@manga_bp.route('/<int:manga_id>', methods=['DELETE'])
@admin_required
def delete_manga(manga_id):
    manga = Manga.query.get_or_404(manga_id)

    # Supprimer les fichiers
    delete_cover_file(manga.cover_image)

    # Supprimer dossier chapitres
    import shutil
    chapters_dir = os.path.join(
        os.path.abspath(os.path.dirname(__file__)),
        '..', 'uploads', 'chapters', str(manga_id)
    )
    if os.path.exists(chapters_dir):
        shutil.rmtree(chapters_dir)

    db.session.delete(manga)
    db.session.commit()

    return jsonify({'message': 'Manga supprimé avec succès'})


# ─── NOTER UN MANGA ──────────────────────
@manga_bp.route('/<int:manga_id>/rate', methods=['POST'])
@jwt_required()
def rate_manga(manga_id):
    user_id = get_jwt_identity()
    manga = Manga.query.get_or_404(manga_id)
    data = request.get_json()
    score = data.get('score', 0)

    if not 1 <= score <= 5:
        return jsonify({'error': 'La note doit être entre 1 et 5'}), 400

    existing = Rating.query.filter_by(user_id=user_id, manga_id=manga_id).first()

    if existing:
        # Mettre à jour
        old_score = existing.score
        existing.score = score
        manga.rating_sum = manga.rating_sum - old_score + score
    else:
        rating = Rating(user_id=user_id, manga_id=manga_id, score=score)
        db.session.add(rating)
        manga.rating_sum += score
        manga.rating_count += 1

    db.session.commit()

    return jsonify({
        'rating': {
            'average': manga.rating_average,
            'count': manga.rating_count,
            'user_score': score
        }
    })