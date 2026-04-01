# import os

# BASE_DIR = os.path.abspath(os.path.dirname(__file__))


# class Config:
#     SECRET_KEY = 'mangayume-secret-2024'
#     JWT_SECRET_KEY = 'mangayume-jwt-2024'
#     JWT_ACCESS_TOKEN_EXPIRES = 86400 * 30

#     SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'mangayume.db')}"
#     SQLALCHEMY_TRACK_MODIFICATIONS = False

#     UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
#     COVERS_FOLDER = os.path.join(UPLOAD_FOLDER, 'covers')
#     CHAPTERS_FOLDER = os.path.join(UPLOAD_FOLDER, 'chapters')
#     MAX_CONTENT_LENGTH = 200 * 1024 * 1024


import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'mangayume-secret-2026')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'mangayume-jwt-2026')
    
    # ✅ Utilise DATABASE_URL pour Supabase PostgreSQL
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL',
        'postgresql://postgres.hqhxftzfqscozjnanaig:Yassin1342%40'
        '@aws-0-eu-west-1.pooler.supabase.com:5432/postgres'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # ⚠️ Sur Vercel, seul /tmp est accessible en écriture
    UPLOAD_FOLDER = '/tmp/uploads'
    COVERS_FOLDER = '/tmp/uploads/covers'
    CHAPTERS_FOLDER = '/tmp/uploads/chapters'