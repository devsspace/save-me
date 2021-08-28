module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      recursive: ["Recursive", "sans-serif"],
    },
    minHeight: {
      120: "120px",
    },
    extend: {
      colors: {
        dark: "#141414",
        light: "#FFFEF9",
        primaryGray: "#F4F4F4",
        primary: "#00CFFC",
        darkGray: "#444444",
        primaryLightBlue: "#3ddcff",
        primaryDark: "#0081F1",
        primaryLight: "#dbf9ff",
        error: "#dc143c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
  ],
}
