export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  );
}