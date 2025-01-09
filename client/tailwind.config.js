/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',  // Animation name
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1)' },         // Start at normal size
          '50%': { transform: 'scale(1.2)' },      // Scale up
          '100%': { transform: 'scale(1)' },       // Scale back to normal size
        },
      },
    },
  },
  plugins: [],
}
