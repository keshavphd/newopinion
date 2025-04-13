/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        smallest: "8px",
      },
      gridTemplateColumns: {
        custom: "1fr 2fr",
      },
    },
  },
  plugins: [],
};
