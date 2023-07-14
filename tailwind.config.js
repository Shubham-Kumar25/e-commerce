const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      padding: {
        12.5: "50px",
      },
    },
    colors: {
      primary: {
        light: "rgb(245, 148, 148)",
        default: "rgb(255, 81, 81)",
        dark: "rgb(248, 47, 47)",
      },

      blue: {
        dark: "rgb(65, 81, 97)",
      },

      gray: {
        200: "rgb(244, 245, 246)",
      },
      white: colors.white,
      black: colors.black,
      indigo: colors.indigo,
    },
  },
  plugins: [],
};
