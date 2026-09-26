/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safar: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          navy: '#0f172a',
          turquoise: '#14bfe1',
          teal: '#00a896',
          cyan: '#06b6d4',
          blue: '#0284c7',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'safar': '0 10px 30px -5px rgba(0, 180, 216, 0.1), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'safar-hover': '0 20px 40px -10px rgba(0, 168, 150, 0.18), 0 8px 16px -4px rgba(15, 23, 42, 0.08)',
        'safar-sm': '0 2px 8px -1px rgba(0, 180, 216, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
