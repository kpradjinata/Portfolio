/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in src
    "./public/index.html" // Also scan index.html if you use classes there
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Genos', 'sans-serif'],
        genos: ['Genos', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg) scale(1.1)' },
          '50%': { transform: 'rotate(6deg) scale(1.1)' },
        },
        boing: {
          '0%': { transform: 'scale(0.5) translateY(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2) translateY(-10px)', opacity: '1' },
          '70%': { transform: 'scale(0.9) translateY(0)' },
          '80%': { transform: 'scale(1.1) translateY(-5px)' },
          '90%': { transform: 'scale(0.95) translateY(0)' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        boing: 'boing 0.8s ease-out forwards', // `forwards` keeps the end state
      },
    },
  },
  plugins: [],
}

