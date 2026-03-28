import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-black text-white">404</h1>
      <p className="mt-4 text-slate-400">Page introuvable</p>
      <Button className="mt-6">
        <Link to="/">Retour à l’accueil</Link>
      </Button>
    </div>
  );
}