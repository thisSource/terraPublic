/** @type {import('tailwindcss').Config} */

const terra = {
  purple: {
    DEFAULT: "#9898D8",
    50: "#FFFFFF",
    100: "#F1F1FA",
    200: "#D3D3EE",
    300: "#B6B6E3",
    400: "#9898D8",
    500: "#6F6FC9",
    600: "#4747B9",
    700: "#373791",
    800: "#272768",
    900: "#18183F",
  },
  green: {
    DEFAULT: "#89CEBA",
    50: "#FFFFFF",
    100: "#FCFEFD",
    200: "#DFF2ED",
    300: "#C3E6DC",
    400: "#A6DACB",
    500: "#89CEBA",
    600: "#61BEA3",
    700: "#44A387",
    800: "#337B67",
    900: "#235446",
  },
  darkpink: "#DB98D7",
  pink: "#FF9BBD",
  darkorange: "#FFAD96",
  orange: "#FFD074",
  yellow: "#F9F871",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terra,
      },
      fontFamily: {
        display: ["Secular One", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
