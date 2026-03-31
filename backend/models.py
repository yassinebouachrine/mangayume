from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import json

db = SQLAlchemy()

manga_genres = db.Table('manga_genres',
    db.Column('manga_id', db.Integer, db.ForeignKey('manga.id', ondelete='CASCADE'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id', ondelete='CASCADE'), primary_key=True)
)

user_favorites = db.Table('user_favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), primary_key=True),
    db.Column('manga_id', db.Integer, db.ForeignKey('manga.id', ondelete='CASCADE'), primary_key=True)
)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    avatar = db.Column(db.String(500), default='')
    role = db.Column(db.String(20), default='user')
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    comments = db.relationship('Comment', backref='author', lazy='dynamic',
                               cascade='all, delete-orphan')
    favorites = db.relationship('Manga', secondary=user_favorites,
                                backref=db.backref('favorited_by', lazy='dynamic'))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self, include_email=False):
        data = {
            'id': self.id,
            'username': self.username,
            'avatar': self.avatar,
            'role': self.role,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
        if include_email:
            data['email'] = self.email
        return data


class Genre(db.Model):
    __tablename__ = 'genre'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    slug = db.Column(db.String(50), unique=True, nullable=False)

    def to_dict(self):
        return {'id': self.id, 'name': self.name, 'slug': self.slug}


class Manga(db.Model):
    __tablename__ = 'manga'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), nullable=False)
    alternative_titles = db.Column(db.Text, default='')
    description = db.Column(db.Text, nullable=False)
    cover_image = db.Column(db.String(500), nullable=False)
    type = db.Column(db.String(20), nullable=False, default='manga')
    status = db.Column(db.String(20), default='ongoing')
    author = db.Column(db.String(200), nullable=False)
    artist = db.Column(db.String(200), default='')
    year = db.Column(db.Integer, default=2024)
    rating_sum = db.Column(db.Float, default=0)
    rating_count = db.Column(db.Integer, default=0)
    views = db.Column(db.Integer, default=0)
    is_featured = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    genres = db.relationship('Genre', secondary=manga_genres,
                             backref=db.backref('mangas', lazy='dynamic'))
    chapters = db.relationship('Chapter', backref='manga', lazy='dynamic',
                               cascade='all, delete-orphan',
                               order_by='Chapter.number.desc()')
    comments = db.relationship('Comment', backref='manga', lazy='dynamic',
                               cascade='all, delete-orphan')

    @property
    def rating_average(self):
        if self.rating_count == 0:
            return 0
        return round(self.rating_sum / self.rating_count, 1)

    @property
    def chapters_count(self):
        return self.chapters.count()

    @property
    def latest_chapter(self):
        ch = Chapter.query.filter_by(manga_id=self.id).order_by(Chapter.number.desc()).first()
        if ch:
            return {
                'id': ch.id,
                'number': ch.number,
                'title': ch.title,
                'released_at': ch.released_at.isoformat() if ch.released_at else None
            }
        return None

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'alternative_titles': self.alternative_titles or '',
            'description': self.description,
            'cover_image': self.cover_image,
            'type': self.type,
            'status': self.status,
            'author': self.author,
            'artist': self.artist or '',
            'year': self.year,
            'rating': {'average': self.rating_average, 'count': self.rating_count},
            'views': self.views,
            'chapters_count': self.chapters_count,
            'latest_chapter': self.latest_chapter,
            'genres': [g.to_dict() for g in self.genres],
            'is_featured': self.is_featured,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

    def to_card(self):
        return {
            'id': self.id,
            'title': self.title,
            'cover_image': self.cover_image,
            'type': self.type,
            'status': self.status,
            'rating': self.rating_average,
            'views': self.views,
            'chapters_count': self.chapters_count,
            'latest_chapter': self.latest_chapter,
            'genres': [g.slug for g in self.genres],
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }


class Chapter(db.Model):
    __tablename__ = 'chapter'
    id = db.Column(db.Integer, primary_key=True)
    manga_id = db.Column(db.Integer, db.ForeignKey('manga.id', ondelete='CASCADE'), nullable=False)
    number = db.Column(db.Float, nullable=False)
    title = db.Column(db.String(300), default='')
    pages = db.Column(db.Text, default='[]')
    pages_count = db.Column(db.Integer, default=0)
    views = db.Column(db.Integer, default=0)
    released_at = db.Column(db.DateTime, default=datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    __table_args__ = (
        db.UniqueConstraint('manga_id', 'number', name='uq_manga_chapter'),
    )

    def get_pages(self):
        try:
            return json.loads(self.pages) if self.pages else []
        except Exception:
            return []

    def set_pages(self, pages_list):
        self.pages = json.dumps(pages_list)
        self.pages_count = len(pages_list)

    def to_dict(self, include_pages=False):
        data = {
            'id': self.id,
            'manga_id': self.manga_id,
            'number': self.number,
            'title': self.title or '',
            'pages_count': self.pages_count,
            'views': self.views,
            'released_at': self.released_at.isoformat() if self.released_at else None
        }
        if include_pages:
            data['pages'] = self.get_pages()
        return data


class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), nullable=False)
    manga_id = db.Column(db.Integer, db.ForeignKey('manga.id', ondelete='CASCADE'), nullable=False)
    chapter_id = db.Column(db.Integer, db.ForeignKey('chapter.id', ondelete='SET NULL'), nullable=True)
    parent_id = db.Column(db.Integer, db.ForeignKey('comment.id', ondelete='CASCADE'), nullable=True)
    content = db.Column(db.Text, nullable=False)
    is_spoiler = db.Column(db.Boolean, default=False)
    is_edited = db.Column(db.Boolean, default=False)
    is_deleted = db.Column(db.Boolean, default=False)
    likes_count = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    replies = db.relationship('Comment', backref=db.backref('parent', remote_side=[id]),
                              lazy='dynamic')

    def to_dict(self, include_replies=True):
        user = User.query.get(self.user_id)
        data = {
            'id': self.id,
            'user': user.to_dict() if user else {'id': 0, 'username': 'Supprimé', 'avatar': '', 'role': 'user'},
            'manga_id': self.manga_id,
            'chapter_id': self.chapter_id,
            'parent_id': self.parent_id,
            'content': self.content if not self.is_deleted else '[Commentaire supprimé]',
            'is_spoiler': self.is_spoiler,
            'is_edited': self.is_edited,
            'is_deleted': self.is_deleted,
            'likes_count': self.likes_count,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
        if include_replies and not self.parent_id:
            replies = self.replies.filter_by(is_deleted=False)\
                .order_by(Comment.created_at.asc()).limit(10).all()
            data['replies'] = [r.to_dict(include_replies=False) for r in replies]
        else:
            data['replies'] = []
        return data


class CommentLike(db.Model):
    __tablename__ = 'comment_like'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comment.id', ondelete='CASCADE'), nullable=False)
    is_like = db.Column(db.Boolean, default=True)

    __table_args__ = (
        db.UniqueConstraint('user_id', 'comment_id', name='uq_user_comment'),
    )


class Rating(db.Model):
    __tablename__ = 'rating'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), nullable=False)
    manga_id = db.Column(db.Integer, db.ForeignKey('manga.id', ondelete='CASCADE'), nullable=False)
    score = db.Column(db.Integer, nullable=False)

    __table_args__ = (
        db.UniqueConstraint('user_id', 'manga_id', name='uq_user_manga_rating'),
    )