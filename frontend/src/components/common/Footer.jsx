export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Mangayume — plateforme moderne de manga.
      </div>
    </footer>
  );
}