/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        blackBG: "#e3342f",
        favorite: "#ff0000",  
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}
}

