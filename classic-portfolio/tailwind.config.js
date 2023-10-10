/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/preline/dist/*.js'
  ],
  plugins: [
    require('preline/plugin'),
  ],
  theme: {
    extend: {}
  }
}

