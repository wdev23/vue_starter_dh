/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
