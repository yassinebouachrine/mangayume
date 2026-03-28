import { useState } from 'react';
import { mangas as initialMangas } from '@/data/mockMangas';
import Button from '@/components/common/Button';

export default function ManageMangas() {
  const [mangas, setMangas] = useState(initialMangas);
  const [form, setForm] = useState({
    title: '',
    type: 'Manga',
    status: 'Ongoing',
    author: ''
  });

  const addManga = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    setMangas([
      ...mangas,
      {
        id: Date.now(),
        title: form.title,
        type: form.type,
        status: form.status,
        rating: 0,
        genre: [],
        cover:
          'https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=900&q=80',
        synopsis: 'Nouveau manga ajouté depuis l’admin.',
        latestChapter: 1,
        views: '0',
        author: form.author,
        comments: [],
        chapters: []
      }
    ]);

    setForm({ title: '', type: 'Manga', status: 'Ongoing', author: '' });
  };

  const deleteManga = (id) => {
    setMangas(mangas.filter((m) => m.id !== id));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">Ajouter un manga</h2>
        <form className="mt-6 space-y-4" onSubmit={addManga}>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Titre"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          />
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            placeholder="Auteur"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option>Manga</option>
            <option>Manhwa</option>
            <option>Manhua</option>
          </select>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Hiatus</option>
          </select>
          <Button className="w-full" type="submit">
            Ajouter
          </Button>
        </form>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">Liste des mangas</h2>
        <div className="mt-6 space-y-3">
          {mangas.map((manga) => (
            <div
              key={manga.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4"
            >
              <div>
                <p className="font-semibold text-white">{manga.title}</p>
                <p className="text-sm text-slate-400">
                  {manga.type} • {manga.status} • {manga.author}
                </p>
              </div>
              <Button
                className="bg-rose-500 hover:bg-rose-400 shadow-rose-500/20"
                onClick={() => deleteManga(manga.id)}
              >
                Supprimer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}