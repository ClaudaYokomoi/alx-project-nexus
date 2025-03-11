module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins', // Ensure Poppins is imported in your CSS
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '30px', // Add padding for large screens
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Custom colors used in your components
        primary: '#222222',
        secondary: '#F5E6E0',
        'lavender-haze': '#E6E6FA',
        'plum-shadow': '#8E4585', // Used in Header
        'ffb82e': '#FFB82E', // Used in Header
        'fe71ba': '#FE71BA', // Used in Header, Footer, and Homepage
        'd94b1d': '#D94B1D', // Used in Header, Footer, and Homepage
        'ff6137': '#FF6137', // Used in Footer
      },
      backgroundImage: {
        // No background image is used, so this can be removed
      },
      keyframes: {
        // Custom animations for marquee and other effects
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(20px)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(-30px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-40px) translateX(10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        // Apply animations to classes
        marquee: 'marquee 20s linear infinite', // For scrolling marquee
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'float-1': 'float-1 6s infinite ease-in-out',
        'float-2': 'float-2 8s infinite ease-in-out',
        'float-3': 'float-3 10s infinite ease-in-out',
        pulse: 'pulse 3s infinite ease-in-out',
      },
    },
  },
  plugins: [
    // Add plugins if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};