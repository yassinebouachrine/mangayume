export default function StatsCard({ label, value, hint }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
      {hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}