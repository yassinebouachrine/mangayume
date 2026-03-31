from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity, get_jwt
from models import User


def admin_required(fn):
    """Décorateur pour les routes admin uniquement"""
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user or user.role != 'admin':
            return jsonify({'error': 'Accès réservé aux administrateurs'}), 403

        return fn(*args, **kwargs)
    return wrapper


def login_required(fn):
    """Décorateur pour les routes nécessitant une connexion"""
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user or not user.is_active:
            return jsonify({'error': 'Utilisateur non trouvé ou désactivé'}), 401

        return fn(*args, **kwargs)
    return wrapper


def get_current_user():
    """Récupère l'utilisateur courant à partir du JWT"""
    try:
        verify_jwt_in_request(optional=True)
        user_id = get_jwt_identity()
        if user_id:
            return User.query.get(user_id)
    except:
        pass
    return None