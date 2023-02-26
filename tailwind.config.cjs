/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cure: {
          black: '#222222',
          gray: '#d3d3d5',
          blue: '#cbd9fe',
          purple: '#d1d3ea',
          green: '#dae6e2',
        },
      },
    },
  },
  plugins: [],
};
