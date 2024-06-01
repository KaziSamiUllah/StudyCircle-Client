/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9AADBF",
          "secondary": "#6D98BA",
          "accent": "#C17767",
          "neutral": "#3d4451",
          "base-100": "#EFEFEF",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
};
