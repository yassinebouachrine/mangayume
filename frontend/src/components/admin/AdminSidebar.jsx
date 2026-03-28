import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpenText, ScrollText } from 'lucide-react';
import logo from '@/assets/logo.png';

const items = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/mangas', label: 'Manage Mangas', icon: BookOpenText },
  { to: '/admin/chapters', label: 'Manage Chapters', icon: ScrollText }
];

export default function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950/95 px-4 py-6 lg:block">
      <div className="mb-8">
        <img
          src={logo}
          alt="Mangayume"
          className="h-14 w-14 rounded-2xl object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-white">Admin Panel</h2>
        <p className="text-sm text-slate-400">Gestion complète du contenu</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}