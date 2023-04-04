/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gh-primary': '#0D1117',
        'gh-red': '#FF7B72',
        'gh-green': '#7EE787',
        'gh-purple': '#bc8cff',
        'gh-blue': '#A5D6FF',
        'gh-ui-base': '#2E374A',
        'gh-blocks': '#161B22',
      },
      fontFamily: {
        product: ['Mona Sans', 'sans-serif'],
        code: ['Inconsolata', 'monospace'],
      },
      transitionDuration: {
        slow: '12000ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
