import { Link, NavLink } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import logo from '@/assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explorer' }
];

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Mangayume"
            className="h-12 w-12 rounded-2xl object-cover shadow-lg shadow-indigo-500/20"
          />
          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">Mangayume</h1>
            <p className="text-xs text-slate-400">Read. Discover. Manage.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800 sm:inline-flex">
            <Search className="h-4 w-4" />
            Search
          </button>

          {user ? (
            <Link
              to={user.role === 'admin' ? '/admin' : '/'}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              {user.role === 'admin' ? 'Admin' : 'Mon compte'}
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Connexion
            </Link>
          )}

          <button className="rounded-2xl border border-slate-800 bg-slate-900 p-3 text-slate-300 transition hover:bg-slate-800 md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}