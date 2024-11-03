/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto :[ "Roboto", "sans-serif"],
      },
      backgroundImage:{
        banner: "url('../dist/assets/banner.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
