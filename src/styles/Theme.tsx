export const DefaultColors = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY_LIGHT: '#f1f1f1',
    GRAY_DARK: '#1f1f1f',
    PRIMARY: '#40A4FF',
    SECONDARY: '#632342',
    TITLE: '#000',
    TEXT: '#CCCCCC',
    MAIN: '#009BCF',
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

  BACKGROUND_LIGHT: 'rgb(226, 226, 226)',
  BACKGROUND: 'rgb(12, 12, 12)',
  DEEP_BLUE: '#2C3D55',
  NAVIGATION_BACKGROUND: 'rgba(203, 222, 232, 0.9)',

  OPACITY_BORDER: 'rgba(255, 255, 255, 0.1)',


  GRAY: '#73737d',

  POINT: 'rgba(233, 196, 106)',
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
    NAVIGATION_BACKGROUND: 'rgba(48, 53, 63, 0.7)',

    OPACITY_BORDER: 'rgba(0, 0, 0, 0.1)',

    GRAY: '#23232d',

    POINT: 'rgb(233, 196, 106)',
    BUTTON_TEXT: '#474747',
    BUTTON: '#647AC5',
    FLAT_LIST_BACKGROUND: '#a1e1f1',
  }
};

type FontTypes = typeof DefaultTheme.fonts;
type ColorTypes = typeof DefaultTheme.colors;

export { darkTheme, lightTheme, FontTypes, ColorTypes };
