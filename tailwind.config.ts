import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Sans",
          "Yu Gothic",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Noto Serif JP", "Yu Mincho", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
