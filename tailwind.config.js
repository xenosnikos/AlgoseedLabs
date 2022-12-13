const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#00A3FF',
        'blue-2': '#BFE8FF',
        'black-1': '#070707',
        'white-1': '#F4F4F4'
      },
      spacing: {
        '11-px': '11px',
        '33-px': '33px',
        '39-px': '39px',
        '52-px': '52px',
        '70-px': '70px',
        '74-px': '74px',
        '91-px': '91px',
        '111-px': '111px',
        '274-px': '274px',
        '318-px': '318px',
        '347-px': '347px',
        '349-px': '349px',
        '353-px': '353px',
        '443-px': '443px',
        '241--px': '-241px',
        '1-15-%': '5.4%'
      },
      gridTemplateColumns: {
        'home-languages': 'repeat(auto-fill, minmax(230px, 1fr))',
        'home-works': 'repeat(auto-fill, minmax(390px, 1fr))',
        'home-accomplishments': 'repeat(auto-fill, minmax(347px, 1fr))'
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
        },
        {
          '.page-header': {
            'color': '#FFF',
            'font-family': 'Courier',
            'font-size': '56px',
            'font-weight': '600',
            'line-height': '64px',
            'text-shadow': `-4px 0px 0px #000,
                            2px 0px 0px #000,
                            0px -2px 0px #000,
                            0px 4px 0px #000`
          }
        },
        {
          '.home-languages-bg': {
            'background': 'linear-gradient(180deg, #00A3FF 0%, rgba(0, 163, 255, 0.53125) 46.88%, rgba(0, 163, 255, 0) 100%)'
          }
        },
        {
          '.testimonial-width': {
            'width': '566.67px!important'
          }
        },
        {
          '.testimonial-slider-dot': {
            'display': 'flex!important',
            'justify-content': 'center',
            'gap': '17px',
            'margin-top': '47px'
          }
        },
        {
          '.testimonial-slider-dot li': {
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'width': '32px',
            'height': '32px',
            'background': '#FFF',
            'font-size': '16px',
            'border': '1px solid #000'
          }
        },
        {
          '.testimonial-slider-dot li.slick-active': {
            'background': '#00A3FF',
            'color': '#FFF'
          }
        },
        {
          '.footer-email-input': {
            'padding': '13px 19px!important'
          }
        },
        {
          '.footer-email-input::placeholder': {
            'color': '#000!important'
          }
        },
      ])
    })
  ],
}
