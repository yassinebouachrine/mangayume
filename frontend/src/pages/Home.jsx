import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles, Flame } from 'lucide-react';
import { mangas } from '@/data/mockMangas';
import MangaCard from '@/components/manga/MangaCard';
import SectionTitle from '@/components/common/SectionTitle';

export default function Home() {
  const featured = mangas[0];

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-[2rem] border border-slate-800 bg-hero-glow p-6 shadow-soft sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200">
                Modern Manga Platform
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200">
                Reader + Admin
              </span>
            </div>

            <div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                Une expérience manga <span className="text-indigo-400">moderne</span>, fluide et premium.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Découvre, lis et gère des mangas avec une interface élégante, pensée pour la lecture et l’administration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
              >
                Explorer maintenant <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to={`/manga/${featured.id}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                Voir le manga vedette
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
                <TrendingUp className="h-5 w-5 text-indigo-400" />
                <p className="mt-3 text-2xl font-bold text-white">120+</p>
                <p className="text-sm text-slate-400">Mangas suivis</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <p className="mt-3 text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-slate-400">Mises à jour</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
                <Flame className="h-5 w-5 text-amber-400" />
                <p className="mt-3 text-2xl font-bold text-white">Premium</p>
                <p className="text-sm text-slate-400">Design UI</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-indigo-500/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-soft">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-[520px] w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <p className="text-sm text-slate-400">Manga vedette</p>
                <h2 className="text-2xl font-bold text-white">{featured.title}</h2>
                <p className="text-sm text-slate-300">{featured.synopsis}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Tendances du moment"
          subtitle="Les titres les plus suivis dans une interface claire et premium."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      </section>
    </div>
  );
}