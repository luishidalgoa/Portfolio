/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c17260', // Color primario intermedio
          100: '#e8b8a4', // Tonos más claros
          200: '#d39e7c',
          300: '#c17260',
          400: '#a65a4a', // Tonos más oscuros
          500: '#923b36',
          600: '#7e2d29',
          700: '#6b2222',
          800: '#581616',
          900: '#450d0d',
        },
        secondary: {
          DEFAULT: '#20819f', // Color primario
            100: '#a0dbde', // Tono más claro
            200: '#77c5cb', // Tono más claro
            300: '#44b1b5', // Tono más claro
            400: '#1f9a9c', // Tono más oscuro
            500: '#20819f', // Color base
            600: '#1b6d81', // Tono más oscuro
            700: '#16695b', // Tono más oscuro
            800: '#125b4f', // Tono más oscuro
            900: '#0e4d43', // Tono más oscuro
        },
        crusta: {
          DEFAULT: '#fbb479', // Color primario intermedio
          100: '#fde3c7', // Tonos más claros
          200: '#fcd2a9',
          300: '#fbb479',
          400: '#f49e5a', // Tonos más oscuros
          500: '#e4883f',
          600: '#c16b2f',
          700: '#9d5123',
          800: '#793b18',
          900: '#562610',
        },
        dark: {
          DEFAULT: '#4b4b4b',  // Tono intermedio
          100: '#f7f7f7',      // Casi blanco
          200: '#e1e1e1',      // Gris claro
          300: '#cfcfcf',      // Gris claro
          400: '#a1a1a1',      // Gris medio claro
          500: '#7b7b7b',      // Gris intermedio
          600: '#4b4b4b',      // Tono intermedio (Color base)
          700: '#3b3b3b',      // Gris oscuro
          800: '#2a2a2a',      // Gris muy oscuro
          900: '#1a1a1a',      // Casi negro
        },
        
      },
    },
  },
  safelist: [
    'from-violet-400',
    'to-purple-300',
    'from-blue-800',
    'to-indigo-900',
    'from-violet-500',
    'to-orange-300',
    'from-cyan-400',
    'to-blue-500',
    'from-rose-400',
    'to-red-500',
    'dark:shadow-gray-800',
    'to-pink-500',
    'from-blue-500',
    'bg-gradient-to-tl',
    'bg-gradient-to-t'
  ],
  plugins: [],
}

