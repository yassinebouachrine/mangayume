import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: 'user'
    });

    navigate('/');
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <div className="w-full rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
        <h1 className="text-3xl font-black text-white">Créer un compte</h1>
        <p className="mt-2 text-sm text-slate-400">
          Inscription utilisateur Mangayume
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
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
            Créer le compte
          </Button>
        </form>

        <p className="mt-4 text-sm text-slate-400">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}