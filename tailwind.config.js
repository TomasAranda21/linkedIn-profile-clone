/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackTheme: "#1d2226",
        lightBlackTheme: "#1d2226",

        blueTheme: "#70b5f9",
        lightBlue: "#a8d4ff",
        lighGray: "#293138",
        darkBlue: "#38434f",
        brown: "#474139"

      },

      spacing: {
        '13': '53px',
        '15': '61px',
        '128': '32rem',
        '144': '36rem',
        '61': "61%",
        '86': "85%"
      }
    },
  },
  plugins: [],
}
