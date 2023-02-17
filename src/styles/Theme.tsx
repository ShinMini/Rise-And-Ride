const DefaultTheme = {
  color: { 
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    normal: '18px',
    thin: '16px',
    big: '22px'
  }
}

const darkTheme = {
  ...DefaultTheme,
  color: {
  ...DefaultTheme.color,
  PRIMARY: '#000',
  SECONDARY: '#73737d',
  TITLE: '#fff',
  TEXT: '#EEEEEE',
  BACKGROUND: '#111216',
  BUTTON_TEXT: '#f9f9f9',
  BUTTON: '#209a19',
  }
}; 
const lightTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    PRIMARY: '#fff',
    SECONDARY: '#73737d',
    TITLE: '#000',
    TEXT: '#CCCCCC',
    BACKGROUND: '#fff',
    BUTTON_TEXT: '#474747',
    BUTTON: '#f1f3b5',
  }
};

export { darkTheme, lightTheme };