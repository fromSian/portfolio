import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/popover.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
      },
      boxShadow: {
        note: "0.2rem 0.2rem 1.2rem var(--shadow-color)",
      },
      colors: {
        tsecondary: "var(--text-secondary)",
        ttertiary: "var(--text-tertiary)",
        thighlight: "var(--text-highlight)",
        "bg-note": "var(--bg-note)",
        light: {
          foreground: "var(--light-foreground)",
          background: "var(--light-background)",
        },
        "table-header": {
          foreground: "var(--table-header-foreground)",
          background: "var(--table-header-background)",
        },
        "header-background": "var(--header-background)",
        "catalog-border": "var(--catalog-border)",
        "image-dot": {
          default: "var(--image-dot)",
          active: "var(--image-dot-active)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        swing_end_left: {
          "0%": {
            transform: "rotate(-2deg) translateX(0%)",
          },
          "50%": { transform: "rotate(2deg) translateX(-2%)" },
          "100%": {
            transform: "rotate(-2deg) translateX(0%)",
          },
        },
        swing_end_right: {
          "0%": {
            transform: "rotate(2deg) translateX(0%)",
          },
          "50%": { transform: "rotate(-2deg) translateX(2%)" },
          "100%": {
            transform: "rotate(2deg) translateX(0%)",
          },
        },
        enter_from_left: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%) " },
        },
        enter_from_right: {
          "0%": { transform: "translateX(100%) " },
          "100%": { transform: "translateX(0%) " },
        },
        show_out: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        text_out: {
          "0%": {
            opacity: "0",
            transform: "scaleY(0)",
            transformOrigin: "50% 100%",
          },
          "100%": {
            opacity: "1",
            transform: "scaleY(1)",
            transformOrigin: "50% 100%",
          },
        },
      },
      animation: {
        "swing-end-for-right": "swing_end_left 2s 2 linear forwards",
        "swing-end-for-left": "swing_end_right 2s 2 linear forwards",
        "enter-from-left": "enter_from_left 4s linear both",
        "enter-from-right": "enter_from_right 4s linear both",
        "show-out": "show_out 2s linear both",
        "text-out": "text_out 0.3s linear both",
      },
    },
  },
  plugins: [],
};
export default config;
