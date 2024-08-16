import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#54BD95",
        gray: "#707070",
        black: "#161C28",
      },
    },
  },
} satisfies Config;
