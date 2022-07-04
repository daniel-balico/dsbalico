module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1e3a8a",
        "primary-light": "#bfdbfe",
        primary: "#3b82f6",
        light: "#CCD6F6",
        "light-medium": "#e2e8f0", 
        "light-secondary": "#64748b",
        "dark-secondary": "#8892B0",
        dark: "#0A192F",
        darker: "#112240"

      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"), 
  ],
};
