/** @type {import('tailwindcss').Config} */

import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "xc-background": "#171A30",
        "xc-foreground": "#1D2239",
        "xc-text": "#919DB9",
        "xc-cardText": "#74778E",
        "xc-borderColor": "#313A6C",
        "xc-blue": "#147AFF",
      },
      maxWidth: {
        lg: "1050px",
        "2xl": "2075px",
      },
    },
  },
  plugins: [scrollbarHide],
};
