import { Bell } from 'lucide-react';
import SearchBar from '@/components/common/SearchBar';

export default function AdminTopbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h1 className="text-xl font-bold text-white">Dashboard Admin</h1>
          <p className="text-sm text-slate-400">Gérer mangas, chapitres, images et commentaires</p>
        </div>

        <div className="flex w-full items-center gap-3 lg:w-[520px]">
          <div className="flex-1">
            <SearchBar placeholder="Recherche rapide..." />
          </div>
          <button className="rounded-2xl border border-slate-800 bg-slate-900 p-3 text-slate-300 transition hover:bg-slate-800">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}