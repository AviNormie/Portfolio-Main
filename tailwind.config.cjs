/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        shine: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "-100%" },
        },
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
};
