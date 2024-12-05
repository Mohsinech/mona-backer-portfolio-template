/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ["neue montreal", "sans-serif"],
        nohemi: ["NOHEMI", "sans-serif"],
      },
      fontWeight: {
        bold: "bold",
        semibold: 800,
        medium: 600,
        regular: 400,
        light: 200,
        extralight: 100,
        thin: "lighter",
      },
      width: {
        ten: "10%",
        twenty: "20%",
        thirty: "30%",
        forty: "40%",
        fifty: "50%",
        sixty: "60%",
        seventy: "70%",
        eighty: "80%",
        ninety: "90%",
      },
      height: {
        ten: "10vh",
        twenty: "20vh",
        thirty: "30vh",
        forty: "40vh",
        fifty: "50vh",
        sixty: "60vh",
        seventy: "70vh",
        eighty: "80vh",
        ninety: "90vh",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        dark: "#171717",
        whity: "#F1F1F1",
      },
      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [],
};
