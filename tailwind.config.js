/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "100%": { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          "-webkit-mask":
            "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          "-webkit-mask-composite": "destination-in",
          "mask-composite": "intersect",
        },
      });
    },
  ],
};
