/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in src
    "./public/index.html" // Also scan index.html if you use classes there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

