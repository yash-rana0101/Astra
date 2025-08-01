import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7ff',
          300: '#a5a5ff',
          400: '#8080ff',
          500: '#471396',
          600: '#090040',
          700: '#070032',
          800: '#050024',
          900: '#030016',
          950: '#01000a',
        },
        secondary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe699',
          300: '#ffd966',
          400: '#ffcc33',
          500: '#FFCC00',
          600: '#cc9900',
          700: '#997300',
          800: '#664d00',
          900: '#332600',
          950: '#1a1300',
        },
        accent: {
          50: '#f9f0ff',
          100: '#f3e0ff',
          200: '#e6c2ff',
          300: '#d9a3ff',
          400: '#cc85ff',
          500: '#B13BFF',
          600: '#8e2fcc',
          700: '#6b2399',
          800: '#471766',
          900: '#240c33',
          950: '#12061a',
        },
        dark: {
          50: '#e6e6f3',
          100: '#ccccf0',
          200: '#9999e0',
          300: '#6666d1',
          400: '#3333c2',
          500: '#090040',
          600: '#070033',
          700: '#050026',
          800: '#04001a',
          900: '#02000d',
          950: '#010007',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(177, 59, 255, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(177, 59, 255, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #090040 0%, #471396 50%, #B13BFF 100%)',
        'accent-gradient': 'linear-gradient(135deg, #B13BFF 0%, #FFCC00 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
