/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(99,102,241,0.22), transparent 45%), radial-gradient(circle at bottom right, rgba(56,189,248,0.14), transparent 35%)'
      }
    }
  },
  plugins: []
};