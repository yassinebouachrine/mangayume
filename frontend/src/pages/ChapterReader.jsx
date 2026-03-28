import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { mangas } from '@/data/mockMangas';
import CommentForm from '@/components/comments/CommentForm';
import CommentSection from '@/components/comments/CommentSection';

export default function ChapterReader() {
  const { mangaId, chapterId } = useParams();
  const manga = mangas.find((m) => m.id === Number(mangaId));
  const chapter = manga?.chapters.find((c) => c.id === Number(chapterId));

  const [comments, setComments] = useState(
    chapter?.comments?.length ? chapter.comments : []
  );

  const currentIndex = useMemo(() => {
    return manga?.chapters.findIndex((c) => c.id === Number(chapterId)) ?? -1;
  }, [manga, chapterId]);

  const prevChapter = currentIndex > 0 ? manga.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && currentIndex < manga.chapters.length - 1
      ? manga.chapters[currentIndex + 1]
      : null;

  if (!manga || !chapter) {
    return <div className="text-slate-300">Chapitre introuvable.</div>;
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
    <div className="space-y-6">
      <Link
        to={`/manga/${manga.id}`}
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au manga
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {manga.title} — Chapter {chapter.number}
          </h1>
          <p className="text-sm text-slate-400">{chapter.title}</p>
        </div>

        <div className="flex gap-2">
          <Link
            to={prevChapter ? `/reader/${manga.id}/${prevChapter.id}` : '#'}
            className={`inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold ${
              prevChapter
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'cursor-not-allowed bg-slate-900 text-slate-500'
            }`}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Link>

          <Link
            to={nextChapter ? `/reader/${manga.id}/${nextChapter.id}` : '#'}
            className={`inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold ${
              nextChapter
                ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                : 'cursor-not-allowed bg-slate-900 text-slate-500'
            }`}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <div
            key={page}
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
              <p className="font-semibold text-white">Page {page}</p>
              <Link
                to={`/manga/${manga.id}`}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Retour au manga
              </Link>
            </div>
            <div className="flex h-[560px] items-center justify-center text-slate-500">
              Espace image de la page {page}
            </div>
          </div>
        ))}
      </div>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <CommentForm onAddComment={addComment} />
        <CommentSection comments={comments} title="Commentaires du chapitre" />
      </section>
    </div>
  );
}