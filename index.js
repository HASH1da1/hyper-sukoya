const sukoyaPinklow = 'rgba(255, 219, 250, 0.6)'
const sukoyaPinkhigh = 'rgb(255, 110, 231)'
const sukoyaSelect = 'rgba(248,28,229,0.3)'
const sukoyaBlack = 'rgb(59, 57, 58)'

const schemeSukoya = {
    bgColor: sukoyaPinklow,
    fgColor: sukoyaBlack,
    cursorColor: sukoyaPinkhigh,
    selectionColor: sukoyaSelect,
  }
  
  const colors = {
    black: '#2e2d2d',
    red: '#ff0051',
    green: '#55ff00',
    yellow: '#fffc2e',
    blue: '#19fbff',
    magenta: '#ff26f4',
    cyan: '#2aa198',
    white: '#ffffff',
    lightBlack: '#7a7267',
    lightRed: '#ff7c6c',
    lightGreen: '#bcd42a',
    lightYellow: '#e6db74',
    lightBlue: '#26a6a6',
    lightMagenta: '#ffa47c',
    lightCyan: '#bcd42a',
    lightWhite: '#f8f8f0',
  }



  exports.decorateConfig = (config) => {
    const scheme =Object.assign({}, defaultOptions,schemeSukoya)
  
    return Object.assign({}, config, {
        backgroundColor: scheme.bgColor,
        foregroundColor: scheme.fgColor,
        cursorColor: scheme.cursorColor,
        selectionColor: scheme.selectionColor,
        colors,
        css: `
        ${config.css || ''}
        .hyper_main {
          border: none;
        }
        .header_header {
          top: 0;
          left: 0;
          right: 0;
        }
        .tabs_nav {
        }
        .tab_tab {
          border: none;
        }
        .tabs_borderShim {
          display: none;
        }
      `
    })
  }