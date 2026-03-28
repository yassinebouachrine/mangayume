import { mangas } from '@/data/mockMangas';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-sm text-slate-400">Total Mangas</p>
          <h3 className="mt-2 text-3xl font-bold text-white">{mangas.length}</h3>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-sm text-slate-400">Total Chapitres</p>
          <h3 className="mt-2 text-3xl font-bold text-white">
            {mangas.reduce((a, m) => a + m.chapters.length, 0)}
          </h3>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-sm text-slate-400">Utilisateurs</p>
          <h3 className="mt-2 text-3xl font-bold text-white">1,240</h3>
        </div>
      </div>
    </div>
  );
}