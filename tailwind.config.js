/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      colors: {
        "vtd-primary": colors.indigo, // Light mode Datepicker color
      },
    },
    fontSize: {
      8: "0.5em",
      9: "0.5625em",
      10: "0.625em",
      11: "0.6875em",
      sm: "0.6875em",
      12: "0.75em",
      base: "0.75em",
      13: "0.8em",
      14: "0.875em",
      lg: "0.875em",
      16: "1em",
      18: "1.125em",
      20: "1.25em",
      xl: "1.25em",
      22: "1.375em",
      24: "1.5em",
      "2xl": "1.5em",
      30: "1.875em",
      36: "2.25em",
      42: "2.625em",
      48: "3em",
      54: "3.375em",
      60: "3.75em",
    },
    fontFamily: {
      // Montserrat is the default font family and default font weight is 600
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      // default colors from tailwind
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      blue: colors.blue,
      indigo: colors.indigo,
      slate: colors.slate,

      // custom colors
      c_light_bleu: "#E3F5FF",
      c_smoke_white: "#FFF",
      c_light_gray: "#F6F6F3",
      c_gray: "#EFEFED",
      c_green: "#E1FF72",
      c_purple: "#E1BEF6",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
