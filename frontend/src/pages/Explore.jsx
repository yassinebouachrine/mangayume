import { useMemo, useState } from 'react';
import { mangas, genres } from '@/data/mockMangas';
import MangaCard from '@/components/manga/MangaCard';
import SectionTitle from '@/components/common/SectionTitle';
import SearchBar from '@/components/common/SearchBar';

export default function Explore() {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState('All');

  const filtered = useMemo(() => {
    return mangas.filter((manga) => {
      const matchesQuery =
        manga.title.toLowerCase().includes(query.toLowerCase()) ||
        manga.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()));

      const matchesType =
        activeType === 'All' || manga.type.toLowerCase() === activeType.toLowerCase();

      return matchesQuery && matchesType;
    });
  }, [query, activeType]);

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Explorer"
        subtitle="Recherche avancée, filtres rapides et catalogue dynamique."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="flex flex-wrap gap-2">
          {['All', 'Manga', 'Manhwa', 'Manhua'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeType === type
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  );
}