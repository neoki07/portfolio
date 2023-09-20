/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'color-bg': {
        light: '#ffffff',
        dark: '#0d1116',
      },
      'color-text-primary': {
        light: '#1f2328',
        dark: '#e6edf3',
      },
      'color-text-secondary': {
        light: '#656d76',
        dark: '#7d8590',
      },
      'color-border': {
        light: '#afb8c1',
        dark: '#484f58',
      },
      'color-divider': {
        light: '#d8dee5',
        dark: '#21262e',
      },
      'color-icon': {
        light: '#afb8c1',
        dark: '#7d8590',
      },
      'color-sun': '#fb923c',
      'color-moon': '#3b82f6',
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
