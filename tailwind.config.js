module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
          "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        },
        keyframes: {
          "spin-around": {
            "0%": { transform: "translateZ(0) rotate(0)" },
            "15%": { transform: "translateZ(0) rotate(90deg)" },
            "35%": { transform: "translateZ(0) rotate(90deg)" },
            "65%": { transform: "translateZ(0) rotate(270deg)" },
            "85%": { transform: "translateZ(0) rotate(270deg)" },
            "100%": { transform: "translateZ(0) rotate(360deg)" },
          },
          "shimmer-slide": {
            to: { transform: "translate(calc(100cqw - 100%), 0)" },
          },
        },
      },
    },
    plugins: [],
  };
