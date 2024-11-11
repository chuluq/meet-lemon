import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", ...fontFamily.sans],
        heading: ["var(--font-outfit)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
