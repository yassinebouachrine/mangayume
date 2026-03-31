from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)
from models import db, User, Manga
from auth import login_required

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Données manquantes'}), 400

    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    # Validation
    if not username or len(username) < 3:
        return jsonify({'error': 'Le nom d\'utilisateur doit contenir au moins 3 caractères'}), 400
    if not email or '@' not in email:
        return jsonify({'error': 'Email invalide'}), 400
    if not password or len(password) < 6:
        return jsonify({'error': 'Le mot de passe doit contenir au moins 6 caractères'}), 400

    # Vérifier unicité
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Cet email est déjà utilisé'}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Ce nom d\'utilisateur est déjà pris'}), 400

    user = User(username=username, email=email)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    token = create_access_token(identity=user.id)

    return jsonify({
        'user': user.to_dict(include_email=True),
        'token': token
    }), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Données manquantes'}), 400

    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return jsonify({'error': 'Email ou mot de passe incorrect'}), 401

    if not user.is_active:
        return jsonify({'error': 'Compte désactivé'}), 403

    token = create_access_token(identity=user.id)

    # Récupérer les IDs favoris
    favorite_ids = [m.id for m in user.favorites]

    return jsonify({
        'user': {**user.to_dict(include_email=True), 'favorites': favorite_ids},
        'token': token
    })


@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    user = User.query.get_or_404(user_id)

    favorite_ids = [m.id for m in user.favorites]
    user_data = user.to_dict(include_email=True)
    user_data['favorites'] = favorite_ids

    return jsonify(user_data)


@auth_bp.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get_or_404(user_id)
    data = request.get_json()

    if 'username' in data:
        new_username = data['username'].strip()
        if len(new_username) >= 3:
            existing = User.query.filter(
                User.username == new_username,
                User.id != user.id
            ).first()
            if not existing:
                user.username = new_username

    if 'password' in data and len(data['password']) >= 6:
        user.set_password(data['password'])

    db.session.commit()
    return jsonify(user.to_dict(include_email=True))


@auth_bp.route('/favorites/<int:manga_id>', methods=['POST'])
@jwt_required()
def toggle_favorite(manga_id):
    user_id = get_jwt_identity()
    user = User.query.get_or_404(user_id)
    manga = Manga.query.get_or_404(manga_id)

    is_favorite = manga in user.favorites

    if is_favorite:
        user.favorites.remove(manga)
    else:
        user.favorites.append(manga)

    db.session.commit()

    return jsonify({
        'is_favorite': not is_favorite,
        'favorites': [m.id for m in user.favorites]
    })


@auth_bp.route('/favorites', methods=['GET'])
@jwt_required()
def get_favorites():
    user_id = get_jwt_identity()
    user = User.query.get_or_404(user_id)

    return jsonify({
        'favorites': [m.to_card_dict() for m in user.favorites]
    })