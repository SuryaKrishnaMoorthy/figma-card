// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
