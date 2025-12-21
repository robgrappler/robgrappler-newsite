import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F5C265',
          goldHover: '#D4A045',
          purple: '#10051F',
          black: '#020308',
          gray: '#1A1B26',
          bone: '#F0EADB',
          red: '#FF4D4D',
        },
        rg: {
          black: '#020308',
          ink: '#050509',
          purpleDeep: '#10051F',
          gold: '#F5C265',
          goldSoft: '#D4A045',
          red: '#FF4D4D',
          bone: '#F0EADB',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        tech: ['B612', 'sans-serif'],
      },
      boxShadow: {
        'rg-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanlineMove 0.8s linear infinite',
        'slow-scan': 'slow-scan 35s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        scanlineMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 4px' },
        },
        'slow-scan': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1) translateY(-2%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [
    typography,
  ],
}