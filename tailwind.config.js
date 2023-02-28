/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "body": ["DM Sans"],
      },

      backgroundImage: {
        "livingroom": 'url("/src/assetts/livingroom.jpg")',
      },
    },
  },
  plugins: [],
}

