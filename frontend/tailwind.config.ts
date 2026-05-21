import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d2c54",
          dark: "#081c38",
          light: "#1e4380",
        },
        accent: {
          DEFAULT: "#f5821f",
          dark: "#d96a0c",
          light: "#fff3e6",
        },
        ink: {
          DEFAULT: "#1a2434",
          muted: "#5b6577",
        },
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f6f9fd",
          alt: "#eef3fa",
        },
        line: "#e3e9f2",
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        display: ["var(--font-cairo)", "var(--font-tajawal)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "14px",
        lg: "22px",
      },
      boxShadow: {
        sm: "0 4px 12px rgba(13, 44, 84, 0.06)",
        DEFAULT: "0 10px 30px rgba(13, 44, 84, 0.08)",
        lg: "0 20px 50px rgba(13, 44, 84, 0.12)",
        accent: "0 8px 20px rgba(245, 130, 31, 0.3)",
        accentLg: "0 12px 28px rgba(245, 130, 31, 0.4)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatMain: {
          "0%, 100%": { transform: "translate(-50%, -50%)" },
          "50%": { transform: "translate(-50%, calc(-50% - 12px))" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatMain: "floatMain 6s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
