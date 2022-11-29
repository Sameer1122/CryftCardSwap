/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1.5s cubic-bezier(.9,.45,.38,1.05) forwards",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "20%": { transform: "rotate(-45deg) scale(1)" },
          "40%": { transform: "rotate(45deg) scale(1)" },
          "60%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "scale(1.25)" },
        },
      },

      backgroundImage: {
        Login:
          "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('../public/assets/Login_Portal_A _Converted_ (1).png')",
        LoginB:
          "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('../public/assets/Login_Portal_A _Converted_ (1).png')",
        Redeem: "url('../public/assets//ezgif.com-gif-maker.gif')",
        Redeem1: "url('../public/assets/Main_Background.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Changeling: ["Changeling", "Changeling"],
      },
      colors: {
        "regal-blue": "#13A89E",
      },
      screens: {
        customlg: { raw: "(max-height: 580px)" },
        custommd: { raw: "(max-height: 700px)" },
        xs: { raw: "(min-width:500px)" },
        custommd2: { raw: "(max-height: 700px)(min-width:640px)" },
      },
    },
    plugins: [],
  },
};
