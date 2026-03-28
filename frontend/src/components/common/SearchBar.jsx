import { Search } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Rechercher un manga...'
}) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-11 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
      />
    </div>
  );
}