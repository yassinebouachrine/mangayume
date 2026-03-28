import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ChapterItem({ mangaId, chapter }) {
  return (
    <Link
      to={`/reader/${mangaId}/${chapter.id}`}
      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 transition hover:border-indigo-500 hover:bg-slate-900"
    >
      <div>
        <p className="font-semibold text-white">
          Chapter {chapter.number} — {chapter.title}
        </p>
        <p className="text-xs text-slate-400">{chapter.date}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </Link>
  );
}