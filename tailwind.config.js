/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    fontSize: {
      8: "0.5em",
      9: "0.5625em",
      10: "0.625em",
      11: "0.6875em",
      12: "0.75em",
      13: "0.8em",
      14: "0.875em",
      16: "1em",
      18: "1.125em",
      20: "1.25em",
      22: "1.375em",
      24: "1.5em",
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
  },
  plugins: [require("@tailwindcss/forms")],
};
