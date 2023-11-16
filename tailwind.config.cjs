/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
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
      'color-badge': {
        light: '#0969da',
        dark: '#2f81f7',
      },
      'color-badge-bg': {
        light: '#ddf4ff',
        dark: '#388bfd1a',
      },
      'color-tooltip': {
        light: '#ffffff',
        dark: '#000000',
      },
      'color-tooltip-bg': {
        light: '#242930',
        dark: '#6e7681',
      },
      'color-contribution': {
        0: {
          light: '#e5e7eb',
          dark: '#1f2937',
        },
        1: {
          light: '#bae6fd',
          dark: '#082f49',
        },
        2: {
          light: '#7dd3fc',
          dark: '#0c4a6e',
        },
        3: {
          light: '#0ea5e9',
          dark: '#0284c7',
        },
        4: {
          light: '#0284c7',
          dark: '#0ea5e9',
        },
        5: {
          light: '#0369a1',
          dark: '#38bdf8',
        },
        6: {
          light: '#075985',
          dark: '#7dd3fc',
        },
        7: {
          light: '#0c4a6e',
          dark: '#bae6fd',
        },
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
