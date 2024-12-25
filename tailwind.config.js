/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('@/assets/images/login-bg.jpg')",
        'home-bg': "url('@/assets/images/home-bg.jpg')",
        'logo-bg': "url('@/assets/images/logo/logo-transparent.png')",
      },
      colors: {
        // primary: '#222222',
        primary: '#5E1675',
        second: '#fff',
      },
    },
  },
  plugins: [],
}
