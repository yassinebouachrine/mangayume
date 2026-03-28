import { useState } from 'react';
import Button from '@/components/common/Button';

export default function CommentForm({ onAddComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = text.trim();
    if (!cleaned) return;

    onAddComment(cleaned);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
      <h3 className="text-lg font-bold text-white">Ajouter un commentaire</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        placeholder="Écris ton avis ici..."
        className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
      />
      <Button type="submit">Publier</Button>
    </form>
  );
}