/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    fontFamily: {
      SpaceMono: ["Space Mono", "sans-serif"],
    },
    screens: {
      md: { max: "900px" },
      mobile: "400px",
    },
    extend: {},
  },
  plugins: [],
};
