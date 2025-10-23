/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: "#4a90c9", 
          dark: "#1e3a5f", 
          medium: "#2c5f8d",
          light: "#60a5db"
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 144, 201, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(74, 144, 201, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
