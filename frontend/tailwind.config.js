/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "emerald",
      "dark",
      {
        mytheme: {
          primary: "#6366f1",

          secondary: "#6366f1",

          accent: "#a21caf",

          neutral: "#131832",

          "base-100": "#fcfcfc",

          info: "#4b5563",

          success: "#8ac926",

          warning: "#ffca3a",

          error: "#ff595e",
        },
      },
    ],
    dark: false,
  },
  plugins: [require("daisyui")],
};
