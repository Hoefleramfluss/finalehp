import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        night: {
          900: "#040813",
          800: "#071022",
          700: "#0c1a33",
        },
        electric: {
          300: "#6ef5ff",
          400: "#00d4ff",
          500: "#00bcd4",
          600: "#0097d1",
        },
        aqua: {
          400: "#00d4ff",
          500: "#00bcd4",
          600: "#0097d1",
        },
      },
      backgroundImage: {
        "mesh-radial":
          "radial-gradient(circle at top left, rgba(0, 212, 255, 0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(0, 188, 212, 0.2), transparent 60%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmerAlt: {
          "100%": { transform: "translateX(100%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.8s linear infinite",
        shimmerAlt: "shimmerAlt 1.6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      boxShadow: {
        aurora: "0 25px 120px -40px rgba(0, 212, 255, 0.45)",
        voxon: "0 25px 100px -45px rgba(0, 188, 212, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
