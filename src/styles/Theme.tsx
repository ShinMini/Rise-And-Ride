const DefaultTheme = {
  colors: {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY: '#73737d',
    GRAY_LIGHT: '#f1f1f1',
    GRAY_DARK: '#1f1f1f',
    PRIMARY: '#40A4FF',
    SECONDARY: '#632342',
    TITLE: '#000',
    TEXT: '#CCCCCC',
    MAIN: '#009BCF',
  },
  fonts: {
      Jua: 'Jua',
      NunitoRegular: 'Nunito-Regular',
      NunitoLight: 'Nunito-Light',
      NunitoBold: 'Nunito-Bold',
      Stylish: 'Stylish',
      Yeon: 'Yeon',
  }
}

const darkTheme = {
  ...DefaultTheme,
  colors: {
  ...DefaultTheme.colors,
  TITLE: '#ffffff',
  TEXT: '#EEEEEE',

  BACKGROUND_LIGHT: 'rgb(226, 226, 226)',
  BACKGROUND: 'rgb(12, 12, 12)',
  DEEP_BLUE: '#2C3D55',
  NAVIGATION_BACKGROUND: 'rgb(48, 80, 103)',


  POINT: 'rgb(233, 196, 106)',
  BUTTON_TEXT: '#f9f9f9',
  BUTTON: '#4A518D',
  FLAT_LIST_BACKGROUND: '#3a3a3a',
  }
};
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    TITLE: '#000',
    TEXT: '#000',

    BACKGROUND_LIGHT: 'rgb(42, 42, 42)',
    BACKGROUND: 'rgb(246, 246, 246)',
    DEEP_BLUE: 'rgb(48, 80, 103)',
    NAVIGATION_BACKGROUND: '#2C3D55',

    POINT: 'rgb(233, 196, 106)',
    BUTTON_TEXT: '#474747',
    BUTTON: '#647AC5',
    FLAT_LIST_BACKGROUND: '#a1e1f1',
  }
};

type FontTypes = typeof DefaultTheme.fonts;
type ColorTypes = typeof DefaultTheme.colors;

export { darkTheme, lightTheme, FontTypes, ColorTypes };
