/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotating: {
          to: { transform: "rotate(360deg)" },
        },
        animation: {
          rotate: "linear 15s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
