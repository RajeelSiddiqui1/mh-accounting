/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        hero: {
          DEFAULT: "hsl(var(--hero-bg))",
          foreground: "hsl(var(--hero-foreground))",
          muted: "hsl(var(--hero-muted))",
        },
        "section-dark": {
          DEFAULT: "hsl(var(--section-dark))",
          foreground: "hsl(var(--section-dark-foreground))",
        },
        cta: {
          DEFAULT: "hsl(var(--cta-bg))",
          foreground: "hsl(var(--cta-foreground))",
        },
        topbar: {
          DEFAULT: "hsl(var(--topbar-bg))",
          foreground: "hsl(var(--topbar-foreground))",
        },
        footer: {
          DEFAULT: "hsl(var(--footer-bg))",
          foreground: "hsl(var(--footer-foreground))",
          heading: "hsl(var(--footer-heading))",
        }
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
