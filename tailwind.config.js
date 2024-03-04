/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(90deg, rgba(103,73,214,0.4) 0%, rgba(121,9,117,0.3) 26%, rgba(220,255,74,0.3066001400560224) 41%, rgba(57,184,72,0.6362920168067228) 71%, rgba(14,139,0,0.3) 100%)",
      },
      height: {
        "700px": "700px",
      },
      width: {
        "1440px": "1440px",
      },
      colors: {
        customPurple: "#6749D6",
        naranja: "#D66049",
        verdeManzana: "#B9D649",
        mostaza: "#D6AB49",
        verdeInicio: "#48D64C",
        gris: "#8C8C8C",
      },
    },
  },
  plugins: [],
};
