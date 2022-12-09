const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#00A3FF',
        'black-1': '#070707',
        'white-1': '#F4F4F4'
      },
      spacing: {
        '33-px': '33px',
        '52-px': '52px',
        '74-px': '74px',
        '274-px': '274px',
        '318-px': '318px',
        '1-15-%': '5.4%'
      }
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents([
        {
          '.desktop-left-bg': {
            'background': 'linear-gradient(0deg, rgba(244, 244, 244, 0.5) 0%, rgba(255, 255, 255, 0) 100%);',
          }
        },
        {
          '.terminal-size': {
            'width': 'calc(100% - 6rem)!important',
            'height': 'calc(100% - 10rem)!important'
          }
        }
      ])
    })
  ],
}
