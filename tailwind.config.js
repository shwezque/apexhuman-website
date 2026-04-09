/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        obsidian: '#13131A',
        graphite: '#2A2A38',
        bone: '#F0EFE9',
        ash: '#8A8A9A',
        blue: '#4A7CFF',
        volt: '#39D98A',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

