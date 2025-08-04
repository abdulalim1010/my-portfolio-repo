/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Urbanist", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#6366F1",
        secondary: "#14B8A6",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "luxury", "pastel", "synthwave"],
  },
};
