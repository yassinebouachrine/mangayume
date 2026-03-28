import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';

export default function Login({ adminMode = false }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = adminMode ? 'admin' : 'user';
    login({
      id: Date.now(),
      name: adminMode ? 'Admin' : 'Utilisateur',
      email: form.email,
      role
    });

    navigate(adminMode ? '/admin' : '/');
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <div className="w-full rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
        <h1 className="text-3xl font-black text-white">
          {adminMode ? 'Connexion Admin' : 'Connexion'}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {adminMode ? 'Accès au panneau d’administration' : 'Accès utilisateur'}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <Button className="w-full" type="submit">
            Se connecter
          </Button>
        </form>

        {!adminMode && (
          <p className="mt-4 text-sm text-slate-400">
            Pas encore de compte ?{' '}
            <Link to="/register" className="text-indigo-400 hover:text-indigo-300">
              S’inscrire
            </Link>
          </p>
        )}

        {adminMode && (
          <p className="mt-4 text-sm text-slate-400">
            Retour au site public ?{' '}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
              Connexion utilisateur
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}