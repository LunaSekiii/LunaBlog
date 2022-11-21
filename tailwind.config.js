/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-img': "url('http://106.52.86.38:1337/uploads/_befa1dc4a9.jpg?updated_at=2022-11-14T00:21:21.533Z')"
      }
    },
  },
  plugins: [require("daisyui")],
};
