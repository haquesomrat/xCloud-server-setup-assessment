/** @type {import('tailwindcss').Config} */

import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: "#171A30",
      foregroundColor: "#1D2239",
      fontColor: "#919DB9",
      cardFontColor: "#74778E",
      borderColor: "#313A6C",
      xcBlue: "#147AFF",
    },
  },
  plugins: [scrollbarHide],
};
