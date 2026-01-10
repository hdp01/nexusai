import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        card: "rgba(255, 255, 255, 0.6)",
        "card-foreground": "#1e293b",
        primary: "#4f46e5",
        "primary-foreground": "#ffffff",
        secondary: "#f0f9ff",
        "secondary-foreground": "#0f172a",
        accent: "#8b5cf6",
        "accent-foreground": "#ffffff",
        "vivid-purple": "#a855f7",
        "vivid-pink": "#ec4899",
        "vivid-orange": "#f97316",
        "vivid-blue": "#06b6d4",
        border: "rgba(0,0,0,0.08)",
        input: "rgba(0,0,0,0.08)",
        ring: "#4f46e5",
      },
      borderRadius: {
        lg: "1.5rem",
        md: "1rem",
        sm: "0.5rem",
      },
      animation: {
        "blob": "blob 7s infinite",
        "tilt": "tilt 10s infinite linear",
        "float": "float 6s ease-in-out infinite",
        "grid": "grid 15s linear infinite"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grid: { 
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;