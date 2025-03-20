/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Source Code Pro", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-circle": {
          "0%": { transform: "translateY(-50%)", right: "48%" },
          "100%": { transform: "translate(100%, -50%)", right: "52%" },
        },
        "slide-circle-mobile": {
          "0%": { transform: "translateX(-50%)", bottom: "68%" },
          "100%": { transform: "translate(-50%, 100%)", bottom: "32%" },
        },
        "slide-left-panel": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-800px)" },
        },
        "slide-left-panel-mobile": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-300px)" },
        },
        "slide-right-panel": {
          "0%": { transform: "translateX(800px)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-right-panel-mobile": {
          "0%": { transform: "translateY(500px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-forms": {
          "0%": { left: "75%" },
          "100%": { left: "25%" },
        },
        "slide-forms-mobile": {
          "0%": { top: "95%", transform: "translate(-50%, -100%)" },
          "100%": { top: "5%", transform: "translate(-50%, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-circle": "slide-circle 1.8s ease-in-out forwards",
        "slide-circle-mobile": "slide-circle-mobile 2s ease-in-out forwards",
        "slide-left-panel": "slide-left-panel 0.9s ease-in-out forwards delay-600",
        "slide-left-panel-mobile": "slide-left-panel-mobile 0.9s ease-in-out forwards delay-800",
        "slide-right-panel": "slide-right-panel 0.9s ease-in-out forwards delay-600",
        "slide-right-panel-mobile": "slide-right-panel-mobile 0.9s ease-in-out forwards delay-600",
        "slide-forms": "slide-forms 1s ease-in-out forwards delay-700",
        "slide-forms-mobile": "slide-forms-mobile 1s ease-in-out forwards delay-800",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};