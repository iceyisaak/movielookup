import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "108": "36rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
