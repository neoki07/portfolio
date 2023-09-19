/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#0d1116',
      },
      't-primary': {
        light: '#1f2328',
        dark: '#e6edf3',
      },
      't-secondary': {
        light: '#656d76',
        dark: '#7d8590',
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
