/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./app.vue",
    // "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        md: '0.875rem',
        base: '1rem',
        lg: '1.275rem',
        '3xl': '1.875rem',
      },
      colors: {
        'font-primary': '#000',
        'font-secondary': '#76879E',
        'gradient-primary-to': '#E0EAF6',
        'input-primary-background' : '#F2F5F8',
        'input-primary-border' : '#D5DBE2',
        'button-primary-gradient-from' : '#8600EF',
        'button-primary-gradient-to' : '#004EEF',
      },
      boxShadow: {
        'md': '0px 40px 60px -33px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

