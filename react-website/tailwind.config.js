/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0200",
        "primary-content": "#ffffff",
        "primary-dark": "#cc0200",
        "primary-light": "#ff3533",

        secondary: "#0200ff",
        "secondary-content": "#ffffff",
        "secondary-dark": "#0200cc",
        "secondary-light": "#3533ff",

        background: "#1a1a1a",
        foreground: "#262626",
        border: "#404040",

        copy: "#fbfbfb",
        "copy-light": "#d9d9d9",
        "copy-lighter": "#a6a6a6",

        success: "#00ff00",
        warning: "#ffff00",
        error: "#ff0000",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffffff"
      },
      fontFamily:{
        body:['Halant']
      },
    },
  },
  plugins: [],
}

