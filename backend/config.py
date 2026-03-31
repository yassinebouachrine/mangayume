import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = 'mangayume-secret-2024'
    JWT_SECRET_KEY = 'mangayume-jwt-2024'
    JWT_ACCESS_TOKEN_EXPIRES = 86400 * 30

    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'mangayume.db')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
    COVERS_FOLDER = os.path.join(UPLOAD_FOLDER, 'covers')
    CHAPTERS_FOLDER = os.path.join(UPLOAD_FOLDER, 'chapters')
    MAX_CONTENT_LENGTH = 200 * 1024 * 1024