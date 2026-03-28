import CommentItem from './CommentItem';

export default function CommentSection({ comments, title = 'Commentaires' }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="space-y-3">
        {comments.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-400">
            Aucun commentaire pour le moment.
          </div>
        ) : (
          comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
        )}
      </div>
    </div>
  );
}