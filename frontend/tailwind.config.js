/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        midnight: '#1E293B',
        electricBlue: '#3B82F6',
        crimson: '#EF4444',
        emerald: '#10B981',
        sunrise: '#F97316',
        softGray: '#F3F4F6',
        richGold: '#FACC15',
      },
      keyframes: {
        fadeInSlide: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInSlide: 'fadeInSlide 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

