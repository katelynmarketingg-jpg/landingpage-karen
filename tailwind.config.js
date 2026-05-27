/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#111111',
          mid: '#1C1C1C',
          light: '#2A2A2A',
        },
        paper: {
          DEFAULT: '#F4F4F4',
          soft: '#EEEEEE',
        },
        stone: {
          DEFAULT: '#888888',
          light: '#BBBBBB',
          dark: '#555555',
        },
      },
      fontFamily: {
        script: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.4em',
        widest2: '0.3em',
        wide2: '0.2em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
