import { useMemo, useState } from 'react';
import { mangas as initialMangas } from '@/data/mockMangas';
import Button from '@/components/common/Button';

export default function ManageChapters() {
  const [mangas, setMangas] = useState(initialMangas);
  const [selectedId, setSelectedId] = useState(initialMangas[0]?.id);
  const [form, setForm] = useState({ number: '', title: '' });

  const selectedManga = useMemo(
    () => mangas.find((m) => m.id === Number(selectedId)),
    [mangas, selectedId]
  );

  const addChapter = (e) => {
    e.preventDefault();
    if (!form.number || !form.title) return;

    setMangas((prev) =>
      prev.map((manga) =>
        manga.id === Number(selectedId)
          ? {
              ...manga,
              chapters: [
                {
                  id: Date.now(),
                  number: Number(form.number),
                  title: form.title,
                  date: new Date().toISOString().split('T')[0],
                  comments: []
                },
                ...manga.chapters
              ]
            }
          : manga
      )
    );

    setForm({ number: '', title: '' });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">Ajouter un chapitre</h2>

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="mt-5 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
        >
          {mangas.map((manga) => (
            <option key={manga.id} value={manga.id}>
              {manga.title}
            </option>
          ))}
        </select>

        <form className="mt-4 space-y-4" onSubmit={addChapter}>
          <input
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            type="number"
            placeholder="Numéro du chapitre"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          />
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Titre du chapitre"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500"
          />
          <Button className="w-full" type="submit">
            Ajouter le chapitre
          </Button>
        </form>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">
          Chapitres de {selectedManga?.title}
        </h2>

        <div className="mt-6 space-y-3">
          {selectedManga?.chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4"
            >
              <div>
                <p className="font-semibold text-white">
                  Chapter {chapter.number} — {chapter.title}
                </p>
                <p className="text-sm text-slate-400">{chapter.date}</p>
              </div>
              <Button className="bg-rose-500 hover:bg-rose-400 shadow-rose-500/20">
                Supprimer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}