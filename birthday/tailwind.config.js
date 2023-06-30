/** @type {import('tailwindcss/types').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slay: "#FAF0E4",
        blay: "#F6D5F7",
        awe: "#FBE9D7",
        moa: "#e9b7ce",
        aku: "#b190ba",
        dia: "#b8a4c9",
      },
      fontSize: {
        kecil: "12px",
      },
      fontFamily: {
        mouse: ["Mouse Memoirs", "sans-serif"],
        hand: ['"Just Another Hand"', "sans-serif"],
        fat: ['"Abril Fatface"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = config;
