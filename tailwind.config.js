/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // blue-400
          500: '#3b82f6', // blue-500
          600: '#2563eb', // blue-600
          700: '#1d4ed8', // blue-700
          800: '#1e40af', // blue-800
          900: '#1e3a8a', // blue-900
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'move-bus': 'moveBus 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        moveBus: {
          '0%, 100%': { left: '0' },
          '50%': { left: 'calc(100% - 4rem)' },
        }
      }
    },
  },
  plugins: [],
}
