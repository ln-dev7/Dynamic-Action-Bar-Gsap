/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-gradient": "linear-gradient(to top, #fef2de, #fee1dd)",
      },
    },
  },
  plugins: [],
};
