module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#141414",
        light: "#F4F4F4",
        primary: "#00CFFC",
        primaryDark: "#0081F1",
        error: "#dc143c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
