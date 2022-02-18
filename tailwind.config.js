module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#FA541C",
        inputPlaceholder: "#E7EAED",
        infoColor: "#141414",
        infoWord: "#647481",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bold: 800,
        bolder: 600,
      },
      screens: {},
      fontSize: {
        buttonSize: "13px",
      },
    },
  },
  plugins: [],
};
