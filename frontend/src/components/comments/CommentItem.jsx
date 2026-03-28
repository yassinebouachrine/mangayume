export default function CommentItem({ comment }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white">{comment.user}</p>
          <p className="text-xs text-slate-500">{comment.date}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{comment.text}</p>
    </div>
  );
}