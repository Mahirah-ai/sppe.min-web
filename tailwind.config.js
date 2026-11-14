/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDEBEC', 100: '#F9CED1', 200: '#F09CA1', 300: '#E2636B', 400: '#D1343E',
          500: '#C21D27', 600: '#B5121B', 700: '#970E16', 800: '#790B12', 900: '#5B080D',
        },
        ink: { DEFAULT: '#181818', 700: '#3F3F46', 500: '#6B7280', 300: '#D1D5DB', 200: '#E5E7EB', 100: '#F3F4F6', 50: '#F9FAFB' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 2px rgba(18,18,18,0.04), 0 10px 24px -14px rgba(18,18,18,0.10)',
        lift: '0 2px 4px rgba(18,18,18,0.04), 0 18px 36px -16px rgba(18,18,18,0.18)',
        modal: '0 30px 60px -18px rgba(18,18,18,0.35), 0 0 0 1px rgba(18,18,18,0.04)',
        glow: '0 10px 30px -10px rgba(181,18,27,0.55)',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { fadeIn: 'fadeIn .2s ease-out', slideUp: 'slideUp .25s ease-out' },
    },
  },
  plugins: [],
}
