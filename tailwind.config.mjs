// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // ... (Define colors if not using CSS variables directly)
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"), //  Typography plugin is usually needed for blog content
  ],
  darkMode: ["class", '[data-theme="dark"]'],
};
