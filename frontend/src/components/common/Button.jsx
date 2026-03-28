export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}