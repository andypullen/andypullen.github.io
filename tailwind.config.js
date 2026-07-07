/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "assets/**/*.svg",
    "content/**/*.{html,njk,md,liquid}",
    "_includes/**/*.{html,njk,md}",
  ],
  theme: {
    colors: {
      'ink': '#14111b',
      'cream': '#f4efe4',
      'muted': '#a89fc0',
      'blue': '#7cd0ff',
      'blue-dark': '#2b303f',
      'purple': '#b49bf5',
      'pink': '#ff8fc6',
      'orange': '#ffa163',
      'green': '#a6e693',
      'yellow': '#ffc82c',
      'gold': '#ffc857',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      display: ['Fraunces', 'Georgia', 'serif'],
      serif: ['Fraunces', 'Georgia', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
      black: 800,
    }
  },
  safelist: [
    {
      pattern: /(text|border)-(blue|orange|gold|green|pink)/,
    },
  ],
  plugins: [],
}
