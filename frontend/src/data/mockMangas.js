export const mangas = [
  {
    id: 1,
    title: 'Shadow Bloom',
    type: 'Manhwa',
    status: 'Ongoing',
    rating: 4.8,
    genre: ['Action', 'Fantasy', 'Drama'],
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    synopsis:
      'Un jeune héros découvre un pouvoir ancien caché dans une fleur noire qui change le destin du royaume.',
    latestChapter: 68,
    views: '1.2M',
    author: 'A. Kuro',
    comments: [
      { id: 1, user: 'Yassine', date: '2026-03-28', text: 'Très bon manga, j’aime beaucoup l’univers.' },
      { id: 2, user: 'Amine', date: '2026-03-27', text: 'Le chapitre récent était incroyable.' }
    ],
    chapters: [
      { id: 1, number: 68, title: 'The Silent Gate', date: '2026-03-10', comments: [] },
      { id: 2, number: 67, title: 'Night of Ashes', date: '2026-03-03', comments: [] },
      { id: 3, number: 66, title: 'The Broken Seal', date: '2026-02-24', comments: [] }
    ]
  },
  {
    id: 2,
    title: 'Neon Ronin',
    type: 'Manga',
    status: 'Completed',
    rating: 4.6,
    genre: ['Sci-Fi', 'Action'],
    cover:
      'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=900&q=80',
    synopsis:
      'Dans une ville futuriste, un samouraï cybernétique combat une société secrète qui contrôle les souvenirs.',
    latestChapter: 142,
    views: '980K',
    author: 'Ryo Tanaka',
    comments: [
      { id: 1, user: 'Sara', date: '2026-03-26', text: 'J’ai adoré la fin.' }
    ],
    chapters: [
      { id: 1, number: 142, title: 'Final Protocol', date: '2026-01-12', comments: [] },
      { id: 2, number: 141, title: 'Ghost Circuit', date: '2026-01-05', comments: [] },
      { id: 3, number: 140, title: 'Steel Heart', date: '2025-12-28', comments: [] }
    ]
  }
];

export const genres = [
  'Action',
  'Adventure',
  'Fantasy',
  'Drama',
  'Sci-Fi',
  'Mystery',
  'Romance',
  'Comedy'
];