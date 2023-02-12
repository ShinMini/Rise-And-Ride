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
  PRIMARY_COLOR: '#000',
  SECONDARY_COLOR: '#73737d',
  TITLE_COLOR: '#fff',
  BACKGROUND_COLOR: '#111216',
  BUTTON_COLOR: '#fff',
  }
}; 
const lightTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    PRIMARY_COLOR: '#fff',
    SECONDARY_COLOR: '#73737d',
    TITLE_COLOR: '#000',
    BACKGROUND_COLOR: '#fff',
    BUTTON_COLOR: '#000',
  }
};

export { darkTheme, lightTheme };