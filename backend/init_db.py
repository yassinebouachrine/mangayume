import os
os.environ['DATABASE_URL'] = (
    'postgresql://postgres.hqhxftzfqscozjnanaig:Yassin1342%40'
    '@aws-0-eu-west-1.pooler.supabase.com:5432/postgres'
)

from app import create_app, db

app = create_app()
with app.app_context():
    db.create_all()
    print("✅ Tables créées avec succès sur Supabase !")