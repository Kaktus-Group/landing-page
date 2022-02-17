module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#FA541C",
        bgTransparent: "rgba(255,255,255,0.3)"
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bold: 800,
      },
      screens: {},
      fontSize: {},
    },
  },
  plugins: [],
};
