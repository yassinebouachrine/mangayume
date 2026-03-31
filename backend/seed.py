import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from app import create_app
from models import db, User, Genre, Manga

application = create_app()

GENRES = [
    ('Action', 'action'), ('Adaptation', 'adaptation'), ('Adult', 'adult'),
    ('Adventure', 'adventure'), ('Animal', 'animal'), ('Anthology', 'anthology'),
    ('Cartoon', 'cartoon'), ('Comedy', 'comedy'), ('Comic', 'comic'),
    ('Cooking', 'cooking'), ('Demons', 'demons'), ('Doujinshi', 'doujinshi'),
    ('Drama', 'drama'), ('Ecchi', 'ecchi'), ('Fantasy', 'fantasy'),
    ('Full Color', 'full-color'), ('Game', 'game'), ('Gender Bender', 'gender-bender'),
    ('Ghosts', 'ghosts'), ('Harem', 'harem'), ('Historical', 'historical'),
    ('Horror', 'horror'), ('Isekai', 'isekai'), ('Josei', 'josei'),
    ('Long Strip', 'long-strip'), ('Mafia', 'mafia'), ('Magic', 'magic'),
    ('Manga', 'manga-genre'), ('Manhua', 'manhua-genre'), ('Manhwa', 'manhwa-genre'),
    ('Martial Arts', 'martial-arts'), ('Mature', 'mature'), ('Mecha', 'mecha'),
    ('Medical', 'medical'), ('Military', 'military'), ('Monster', 'monster'),
    ('Monster Girls', 'monster-girls'), ('Monsters', 'monsters'),
    ('Music', 'music'), ('Mystery', 'mystery'), ('Office', 'office'),
    ('Office Workers', 'office-workers'), ('One Shot', 'one-shot'),
    ('Police', 'police'), ('Psychological', 'psychological'),
    ('Reincarnation', 'reincarnation'), ('Romance', 'romance'),
    ('School Life', 'school-life'), ('Sci-Fi', 'sci-fi'),
    ('Science Fiction', 'science-fiction'), ('Seinen', 'seinen'),
    ('Shoujo', 'shoujo'), ('Shoujo Ai', 'shoujo-ai'), ('Shounen', 'shounen'),
    ('Shounen Ai', 'shounen-ai'), ('Slice of Life', 'slice-of-life'),
    ('Smut', 'smut'), ('Soft Yaoi', 'soft-yaoi'), ('Sports', 'sports'),
    ('Super Power', 'super-power'), ('Superhero', 'superhero'),
    ('Supernatural', 'supernatural'), ('Thriller', 'thriller'),
    ('Time Travel', 'time-travel'), ('Tragedy', 'tragedy'),
    ('Vampire', 'vampire'), ('Vampires', 'vampires'),
    ('Video Games', 'video-games'), ('Villainess', 'villainess'),
    ('Web Comic', 'web-comic'), ('Webtoons', 'webtoons'),
    ('Yaoi', 'yaoi'), ('Yuri', 'yuri'), ('Zombies', 'zombies'),
]

MANGAS = [
    {
        'title': 'Solo Leveling',
        'alternative_titles': '나 혼자만 레벨업',
        'description': 'Sung Jin-Woo, le plus faible chasseur de rang E, obtient un système unique après un donjon mystérieux qui lui permet de monter en niveau sans limites.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/3/222295l.jpg',
        'type': 'manhwa', 'status': 'completed', 'author': 'Chugong',
        'artist': 'Jang Sung-Rak', 'year': 2018,
        'rating_sum': 48, 'rating_count': 10, 'views': 2500000, 'is_featured': True,
        'genres': ['action', 'adventure', 'fantasy', 'supernatural']
    },
    {
        'title': 'One Piece',
        'alternative_titles': 'ワンピース',
        'description': 'Monkey D. Luffy part à l\'aventure pour devenir le Roi des Pirates et trouver le One Piece.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/2/253146l.jpg',
        'type': 'manga', 'status': 'ongoing', 'author': 'Oda Eiichiro',
        'artist': 'Oda Eiichiro', 'year': 1997,
        'rating_sum': 49, 'rating_count': 10, 'views': 15000000, 'is_featured': True,
        'genres': ['action', 'adventure', 'comedy', 'fantasy', 'shounen']
    },
    {
        'title': 'Jujutsu Kaisen',
        'alternative_titles': '呪術廻戦',
        'description': 'Yuji Itadori devient l\'hôte du Roi des Fléaux Ryomen Sukuna et rejoint l\'école de sorcellerie.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/3/210341l.jpg',
        'type': 'manga', 'status': 'completed', 'author': 'Akutami Gege',
        'artist': 'Akutami Gege', 'year': 2018,
        'rating_sum': 46, 'rating_count': 10, 'views': 8500000, 'is_featured': True,
        'genres': ['action', 'supernatural', 'drama', 'school', 'shounen']
    },
    {
        'title': 'Tower of God',
        'alternative_titles': '신의 탑',
        'description': 'Bam suit Rachel dans la Tour mystérieuse qui promet tout à celui qui atteint son sommet.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/1/260027l.jpg',
        'type': 'manhwa', 'status': 'ongoing', 'author': 'SIU', 'artist': 'SIU', 'year': 2010,
        'rating_sum': 45, 'rating_count': 10, 'views': 5200000, 'is_featured': True,
        'genres': ['action', 'adventure', 'fantasy', 'mystery', 'supernatural']
    },
    {
        'title': 'Martial Peak',
        'alternative_titles': '武炼巅峰',
        'description': 'Yang Kai obtient un livre noir mystérieux et commence son ascension vers le sommet des arts martiaux.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/2/260272l.jpg',
        'type': 'manhua', 'status': 'ongoing', 'author': 'Momo', 'artist': 'Pikapi', 'year': 2018,
        'rating_sum': 42, 'rating_count': 10, 'views': 7800000, 'is_featured': False,
        'genres': ['action', 'martial-arts', 'adventure', 'fantasy']
    },
    {
        'title': 'Chainsaw Man',
        'alternative_titles': 'チェンソーマン',
        'description': 'Denji fusionne avec son chien-démon Pochita pour devenir Chainsaw Man.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/3/216464l.jpg',
        'type': 'manga', 'status': 'ongoing', 'author': 'Fujimoto Tatsuki',
        'artist': 'Fujimoto Tatsuki', 'year': 2018,
        'rating_sum': 47, 'rating_count': 10, 'views': 9200000, 'is_featured': True,
        'genres': ['action', 'supernatural', 'horror', 'comedy', 'shounen']
    },
    {
        'title': 'The Beginning After The End',
        'alternative_titles': 'TBATE',
        'description': 'Le roi Grey se réincarne dans un monde de magie avec les souvenirs de sa vie passée.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/1/259279l.jpg',
        'type': 'manhwa', 'status': 'ongoing', 'author': 'TurtleMe',
        'artist': 'Fuyuki23', 'year': 2018,
        'rating_sum': 46, 'rating_count': 10, 'views': 6100000, 'is_featured': True,
        'genres': ['action', 'adventure', 'fantasy', 'reincarnation', 'magic']
    },
    {
        'title': 'Demon Slayer',
        'alternative_titles': '鬼滅の刃',
        'description': 'Tanjiro rejoint les Demon Slayers pour sauver sa sœur Nezuko transformée en démon.',
        'cover_image': 'https://cdn.myanimelist.net/images/manga/3/179023l.jpg',
        'type': 'manga', 'status': 'completed', 'author': 'Gotouge Koyoharu',
        'artist': 'Gotouge Koyoharu', 'year': 2016,
        'rating_sum': 44, 'rating_count': 10, 'views': 12000000, 'is_featured': False,
        'genres': ['action', 'supernatural', 'historical', 'shounen', 'demons']
    },
]

def seed():
    with application.app_context():
        print('🗑️  Nettoyage...')
        db.drop_all()
        db.create_all()

        print('📂 Genres...')
        gmap = {}
        for name, slug in GENRES:
            g = Genre(name=name, slug=slug)
            db.session.add(g)
            gmap[slug] = g
        db.session.flush()

        print('👤 Utilisateurs...')
        admin = User(username='admin', email='admin@mangayume.com', role='admin')
        admin.set_password('admin123')
        db.session.add(admin)

        user = User(username='reader', email='reader@mangayume.com', role='user')
        user.set_password('reader123')
        db.session.add(user)
        db.session.flush()

        print('📚 Mangas...')
        for md in MANGAS:
            gs = md.pop('genres')
            manga = Manga(**md)
            for s in gs:
                if s in gmap:
                    manga.genres.append(gmap[s])
            db.session.add(manga)

        db.session.commit()
        print(f'''
   ✅ Seed terminé!
   Genres: {Genre.query.count()}
   Mangas: {Manga.query.count()}
   Users:  {User.query.count()}

   Admin: admin@mangayume.com / admin123
   User:  reader@mangayume.com / reader123
        ''')

if __name__ == '__main__':
    seed()