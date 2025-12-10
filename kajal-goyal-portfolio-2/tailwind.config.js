/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-mist': '#F5F7FA',
        'slate-blue': '#4A5568',
        'warm-taupe': '#C3B091',
        'pastel-cloud': '#E6F3F5',
        'icon-blue': '#2D3748',
      },
      fontFamily: {
        serif: ['Inter', 'serif'], // Fallback for now, usually needs specific font imports
        sans: ['Inter', 'sans-serif'],
        script: ['cursive'], // Placeholder for script font
      },
    },
  },
  plugins: [],
}
