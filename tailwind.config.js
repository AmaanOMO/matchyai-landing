/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B61FF",
        accent: "#3B82F6",
        background: "#F9FAFB",
        "background-alt": "#E0E7FF",
        text: "#111827",
      },
    },
  },
  plugins: [],
}


