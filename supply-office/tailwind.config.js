/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        table: "var(--table)",
        forest: {
          DEFAULT: "#0e4033",
          dark: "#0a3329",
          light: "#1c614e",
        },
        sage: {
          DEFAULT: "#a9c8b7",
          light: "var(--sage-light)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          light: "var(--amber-light)",
          deep: "#8e6420",
        },
        danger: {
          DEFAULT: "var(--danger)",
          light: "var(--danger-light)",
        },
        "chart-issued": "var(--chart-issued)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(27, 58, 45, 0.035)",
      },
    },
  },
  plugins: [],
};
