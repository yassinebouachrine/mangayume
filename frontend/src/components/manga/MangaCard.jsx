import { Link } from 'react-router-dom';
import { Star, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MangaCard({ manga }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-soft"
    >
      <Link to={`/manga/${manga.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={manga.cover}
            alt={manga.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              {manga.type}
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              {manga.status}
            </span>
          </div>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold text-white">{manga.title}</h3>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold">{manga.rating}</span>
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-slate-400">{manga.synopsis}</p>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Chapter {manga.latestChapter}
            </span>
            <span>{manga.views} views</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {manga.genre.slice(0, 3).map((g) => (
              <span
                key={g}
                className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-xs text-slate-200"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}