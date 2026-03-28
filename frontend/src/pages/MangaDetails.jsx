import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { mangas } from '@/data/mockMangas';
import ChapterItem from '@/components/manga/ChapterItem';
import CommentForm from '@/components/comments/CommentForm';
import CommentSection from '@/components/comments/CommentSection';

export default function MangaDetails() {
  const { id } = useParams();
  const manga = mangas.find((m) => m.id === Number(id));

  const [comments, setComments] = useState(manga?.comments || []);

  const sortedChapters = useMemo(() => {
    return [...(manga?.chapters || [])].sort((a, b) => b.number - a.number);
  }, [manga]);

  if (!manga) {
    return <div className="text-slate-300">Manga introuvable.</div>;
  }

  const addComment = (text) => {
    setComments((prev) => [
      {
        id: Date.now(),
        user: 'Utilisateur',
        date: new Date().toISOString().split('T')[0],
        text
      },
      ...prev
    ]);
  };

  return (
    <div className="space-y-10">
      <Link
        to="/explore"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l’exploration
      </Link>

      <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-soft">
          <img src={manga.cover} alt={manga.title} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              {manga.type}
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              {manga.status}
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              {manga.author}
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-black text-white">{manga.title}</h1>
            <div className="mt-3 flex items-center gap-2 text-amber-400">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">{manga.rating}</span>
            </div>
          </div>

          <p className="max-w-3xl text-slate-300">{manga.synopsis}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/reader/${manga.id}/${sortedChapters[0]?.id}`}
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Lire maintenant
            </Link>
            <button className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
              Ajouter aux favoris
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {manga.genre.map((g) => (
              <span
                key={g}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-white">Chapitres</h2>
        <div className="space-y-3">
          {sortedChapters.map((chapter) => (
            <ChapterItem key={chapter.id} mangaId={manga.id} chapter={chapter} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <CommentForm onAddComment={addComment} />
        <CommentSection comments={comments} title="Commentaires du manga" />
      </section>
    </div>
  );
}