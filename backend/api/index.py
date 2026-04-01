import sys
import os

# Ajouter le dossier parent au path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

os.environ.setdefault('DATABASE_URL',
    'postgresql://postgres.hqhxftzfqscozjnanaig:Yassin1342%40'
    '@aws-0-eu-west-1.pooler.supabase.com:5432/postgres'
)
os.environ.setdefault('SECRET_KEY', 'mangayume-secret-2026')
os.environ.setdefault('JWT_SECRET_KEY', 'mangayume-jwt-2026')

from app import create_app

app = create_app()

# ⚠️ Vercel cherche exactement "app" comme variable WSGI
# Pas besoin de "handler"