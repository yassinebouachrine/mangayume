from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Comment, CommentLike
from auth import login_required

comment_bp = Blueprint('comments', __name__)


# ─── COMMENTAIRES D'UN MANGA ─────────────
@comment_bp.route('/manga/<int:manga_id>', methods=['GET'])
def get_comments(manga_id):
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('limit', 20, type=int)
    chapter_id = request.args.get('chapter_id', type=int)

    query = Comment.query.filter_by(
        manga_id=manga_id,
        parent_id=None,
        is_deleted=False
    )

    if chapter_id:
        query = query.filter_by(chapter_id=chapter_id)

    query = query.order_by(Comment.created_at.desc())
    pagination = query.paginate(page=page, per_page=per_page, error_out=False)

    return jsonify({
        'comments': [c.to_dict() for c in pagination.items],
        'pagination': {
            'current': pagination.page,
            'pages': pagination.pages,
            'total': pagination.total
        }
    })


# ─── AJOUTER UN COMMENTAIRE ──────────────
@comment_bp.route('', methods=['POST'])
@jwt_required()
def create_comment():
    user_id = get_jwt_identity()
    data = request.get_json()

    content = data.get('content', '').strip()
    manga_id = data.get('manga_id')
    chapter_id = data.get('chapter_id')
    parent_id = data.get('parent_id')
    is_spoiler = data.get('is_spoiler', False)

    if not content:
        return jsonify({'error': 'Le commentaire ne peut pas être vide'}), 400
    if not manga_id:
        return jsonify({'error': 'manga_id est requis'}), 400
    if len(content) > 2000:
        return jsonify({'error': 'Le commentaire ne doit pas dépasser 2000 caractères'}), 400

    comment = Comment(
        user_id=user_id,
        manga_id=manga_id,
        chapter_id=chapter_id,
        parent_id=parent_id,
        content=content,
        is_spoiler=is_spoiler
    )

    db.session.add(comment)
    db.session.commit()

    return jsonify(comment.to_dict()), 201


# ─── MODIFIER UN COMMENTAIRE ─────────────
@comment_bp.route('/<int:comment_id>', methods=['PUT'])
@jwt_required()
def update_comment(comment_id):
    user_id = get_jwt_identity()
    comment = Comment.query.get_or_404(comment_id)

    if comment.user_id != user_id:
        return jsonify({'error': 'Non autorisé'}), 403

    data = request.get_json()
    content = data.get('content', '').strip()

    if not content:
        return jsonify({'error': 'Le commentaire ne peut pas être vide'}), 400

    comment.content = content
    comment.is_edited = True
    if 'is_spoiler' in data:
        comment.is_spoiler = data['is_spoiler']

    db.session.commit()
    return jsonify(comment.to_dict())


# ─── SUPPRIMER UN COMMENTAIRE ────────────
@comment_bp.route('/<int:comment_id>', methods=['DELETE'])
@jwt_required()
def delete_comment(comment_id):
    user_id = get_jwt_identity()
    from models import User
    user = User.query.get(user_id)
    comment = Comment.query.get_or_404(comment_id)

    if comment.user_id != user_id and user.role != 'admin':
        return jsonify({'error': 'Non autorisé'}), 403

    comment.is_deleted = True
    comment.content = '[Commentaire supprimé]'
    db.session.commit()

    return jsonify({'message': 'Commentaire supprimé'})


# ─── LIKER UN COMMENTAIRE ────────────────
@comment_bp.route('/<int:comment_id>/like', methods=['POST'])
@jwt_required()
def like_comment(comment_id):
    user_id = get_jwt_identity()
    comment = Comment.query.get_or_404(comment_id)

    existing = CommentLike.query.filter_by(
        user_id=user_id, comment_id=comment_id
    ).first()

    if existing:
        if existing.is_like:
            # Retirer le like
            db.session.delete(existing)
            comment.likes_count = max(0, comment.likes_count - 1)
        else:
            # Changer dislike en like
            existing.is_like = True
            comment.likes_count += 2
    else:
        like = CommentLike(
            user_id=user_id,
            comment_id=comment_id,
            is_like=True
        )
        db.session.add(like)
        comment.likes_count += 1

    db.session.commit()
    return jsonify({'likes_count': comment.likes_count})


# ─── DISLIKER UN COMMENTAIRE ─────────────
@comment_bp.route('/<int:comment_id>/dislike', methods=['POST'])
@jwt_required()
def dislike_comment(comment_id):
    user_id = get_jwt_identity()
    comment = Comment.query.get_or_404(comment_id)

    existing = CommentLike.query.filter_by(
        user_id=user_id, comment_id=comment_id
    ).first()

    if existing:
        if not existing.is_like:
            db.session.delete(existing)
            comment.likes_count += 1
        else:
            existing.is_like = False
            comment.likes_count -= 2
    else:
        dislike = CommentLike(
            user_id=user_id,
            comment_id=comment_id,
            is_like=False
        )
        db.session.add(dislike)
        comment.likes_count -= 1

    db.session.commit()
    return jsonify({'likes_count': comment.likes_count})