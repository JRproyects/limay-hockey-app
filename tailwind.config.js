// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: ['wave', 'bubbles'], 
  theme: {
    extend: {
      colors: {
        aqua: '#00BFFF',
        deepBlue: '#003366',
        lightBlue: '#e0f7fa',
      },
    },
  },
  plugins: [],
}

