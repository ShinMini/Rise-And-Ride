export const DefaultColors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GRAY_LIGHT: '#f1f1f1',
    GRAY_DARK: '#1F1F1F',
    PRIMARY: '#40A4FF',
    SECONDARY: '#632342',
    TITLE: '#000',
    TEXT: '#CCCCCC',
    MAIN: '#009BCF',
    POINT: 'rgb(233, 196, 106)',
    GREEN: '#2A9D8F',
    RED: '#F24333'
}

export const DefaultFonts = {
    /** fonts about words */
    Jua: 'Jua',

    NunitoThin: 'NunitoThin',
    NunitoRegular: 'NunitoRegular',
    NunitoBold: 'NunitoBold',

    Stylish: 'Stylish',

    Yeon: 'Yeon',

    NaNumThin: 'NaNumThin',
    NaNumRegular: 'NaNumRegular',
    NaNumMedium: 'NaNumMedium',
    NaNumBold: 'NaNumBold',
    NaNumExtraBold: 'NaNumExtraBold',

    Roboto: 'Roboto',

    /** fonts about digit && number */
    DigitThin: 'DigitThin',
    DigitRegular: 'DigitRegular',
    DigitBold: 'DigitBold',
    DigitExtraBold: 'DigitExtraBold',
}

const DefaultTheme = {
  colors: {...DefaultColors},
  fonts: {...DefaultFonts}
}

const darkTheme = {
  ...DefaultTheme,
  colors: {
  ...DefaultTheme.colors,
  TITLE: '#ffffff',
  TEXT: '#EEEEEE',

  BACKGROUND_OPPOSITE: 'rgb(246, 246, 246)',
  BACKGROUND: 'rgb(12, 12, 12)',
  DEEP_BLUE: '#2C3D55',
  NAVIGATION_BACKGROUND: 'rgba(203, 222, 232, 0.3)',

  OPACITY_BORDER: 'rgba(255, 255, 255, 0.1)',


  GRAY: '#93939d',

  BUTTON_TEXT: '#f9f9f9',
  BUTTON: '#4A518D',
  SURFACE: '#3a3a3a',
  }
};
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    TITLE: '#000',
    TEXT: '#000',

    BACKGROUND_OPPOSITE: 'rgb(22, 24, 27)',
    BACKGROUND: 'rgb(246, 246, 246)',
    DEEP_BLUE: 'rgb(48, 80, 103)',
    NAVIGATION_BACKGROUND: 'rgba(48, 53, 63, 0.7)',

    OPACITY_BORDER: 'rgba(0, 0, 0, 0.1)',

    GRAY: '#23232d',

    BUTTON_TEXT: '#474747',
    BUTTON: '#647AC5',
    SURFACE: '#AaAaAa',
  }
};

type FontTypes = typeof DefaultTheme.fonts;
type ColorTypes = typeof DefaultTheme.colors;

export { darkTheme, lightTheme, FontTypes, ColorTypes };
