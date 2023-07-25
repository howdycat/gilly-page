/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif']
      },
      colors: {
        'cherry-red': '#CC313D',
        'bubblegum-pink': '#F7C5CC',
        'light-blue': '#46CDCF',
        'loud-yellow': '#f5e100',
        'mint': '#46e801',
        'lapis-blue': '#1E6B94',
        'dark-purple': '#731C94',
        'navy-blue': '#CC313D',
        'off-white': '#F0EDCC',
        'coral-pink': '#254441'
      }
    },
  },
  plugins: [],
}

