const DefaultTheme = {
  colors: {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY: '#73737d',
    GRAY_LIGHT: '#f1f1f1',
    GRAY_DARK: '#1f1f1f',
    PRIMARY: 'rgba(34, 174, 29, 0.7)',
    SECONDARY: '#632342',
    TITLE: '#000',
    TEXT: '#CCCCCC',
  },
  fonts: {
    normal: '18px',
    thin: '16px',
    medium: '22px',
    bold: '24px',
    big: '30px',
  }
}

const darkTheme = {
  ...DefaultTheme,
  colors: {
  ...DefaultTheme.colors,
  TITLE: '#fff',
  TEXT: '#EEEEEE',
  BACKGROUND: '#111216',
  BUTTON_TEXT: '#f9f9f9',
  BUTTON: '#209a19',
  }
};
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    TITLE: '#000',
    TEXT: '#000',
    BACKGROUND: '#fff',
    BUTTON_TEXT: '#474747',
    BUTTON: '#f1f3b5',
  }
};

export { darkTheme, lightTheme };
