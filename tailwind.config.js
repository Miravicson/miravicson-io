module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    // }),
    fontFamily: {
      display: ['Graphik', 'Arial', 'sans-serif', 'system-ui'],
      special: ['"GT Pressura Mono"', 'monospace'],
    },
    extend: {
      colors: {
        'primary-text-color': '#333',
        'paragraph-text-color': '#333',
        'secondary-text-color': '#777',
        'light-subdued-elements-color': '#fff',
        'subdued-elements-color': '#fff',
        'top-background-color': '#fff',
        'bottom-background-color': '#f1f1f1',
        'error-color': '#da2626',
        'dark-tiles': '#333',
        'd-primary-text-color': '#fff',
        'd-paragraph-text-color': '#ccc',
        'd-secondary-text-color': '#999',
        'd-light-subdued-elements-color': 'rgba(255, 255, 255, 0.4)',
        'd-subdued-elements-color': 'rgba(255, 255, 255, 0.15)',
        'd-top-background-color': '#161616',
        'd-bottom-background-color': '#000',
        'd-error-color': '#ff7060',
        'd-dark-tiles': '#222',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },

  plugins: [],
};
