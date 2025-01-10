import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#323339'
        },

        secondary: {
          DEFAULT: '#1E1F23'
        },

        accent: {
          DEFAULT: '#01C38D'
        },

      },
    },
  },
  plugins: [],
} satisfies Config;
