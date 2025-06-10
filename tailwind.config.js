/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Optional: if you're using the /app directory
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite", // Smooth horizontal scroll
        "fade-in-up": "fade-in-up 1s ease-out forwards", // Smooth fade-in on load
        float: "float 6s ease-in-out infinite", // Subtle floating effect
        "slow-zoom": "slow-zoom 20s ease-in-out infinite", // Subtle zoom in/out
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-outline-1": {
          "-webkit-text-stroke": "1px black",
          color: "transparent",
        },
      });
    },
  ],
};
