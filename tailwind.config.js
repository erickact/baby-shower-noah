module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: "Lora, serif",
      sans: "Roboto Condensed, sans-serif",
      mono: "licorice, cursive",
    },
    extend: {
      colors: {
        primary: "#97CEEC",
        secondary: "#BBE0F4",
        tertiary: "#F1EEFA",
        quaternary: "#9FD192",
        brown: "#C2A294",

        "ui-1-year-bg": "#DBDBDB",
        "ui-1-year-skyblue": "#46BDC9",
        "ui-1-year-green": "#80B69C",
      },
    },
  },
  plugins: [],
};
