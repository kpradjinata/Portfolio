/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Genos', 'sans-serif'],
        genos: ['Genos', 'sans-serif'],
      },
      keyframes: {
        subtleWiggle: {
          '0%, 100%': { transform: 'rotate(-2deg) scale(1.02) translateX(-1px) translateY(0.5px)' },
          '50%': { transform: 'rotate(2deg) scale(1.02) translateX(1px) translateY(-0.5px)' },
        },
        mediumWiggle: {
          '0%, 100%': { transform: 'rotate(-5deg) scale(1.05) translateX(-3px) translateY(1px)' },
          '50%': { transform: 'rotate(5deg) scale(1.05) translateX(3px) translateY(-1px)' },
        },
        strongWiggle: {
          '0%, 100%': { transform: 'skewX(-10deg) skewY(8deg) scale(1.1) rotate(-6deg)' },
          '50%':   { transform: 'skewX(10deg) skewY(-8deg) scale(1.1) rotate(6deg)' },
        },
        extremePopWiggle: {
          '0%, 100%': { transform: 'skewX(-25deg) skewY(20deg) scale(1.90) rotate(-15deg)' },
          '25%':   { transform: 'skewX(25deg) skewY(-20deg) scale(2.0) rotate(15deg)' },
          '50%':   { transform: 'skewX(-20deg) skewY(25deg) scale(1.85) rotate(-10deg)' },
          '75%':   { transform: 'skewX(20deg) skewY(-25deg) scale(1.95) rotate(10deg)' },
        },
        boing: {
          '0%': { transform: 'scale(0.5) translateY(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1) translateY(-5px)', opacity: '1' },
          '70%': { transform: 'scale(0.95) translateY(0)' },
          '80%': { transform: 'scale(1.05) translateY(-2px)' },
          '90%': { transform: 'scale(0.98) translateY(0)' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        boing: 'boing 0.7s ease-out forwards',
        subtleWiggle: 'subtleWiggle 1.2s ease-in-out infinite alternate',
        mediumWiggle: 'mediumWiggle 0.6s ease-in-out infinite alternate',
        strongWiggle: 'strongWiggle 0.3s ease-in-out infinite alternate',
        extremePopWiggle: 'extremePopWiggle 0.4s linear infinite alternate',
      },
    },
  },
  plugins: [],
}

