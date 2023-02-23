export const DefaultColors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GRAY: '#ADB5BD',
    GRAY_LIGHT: '#CED4DA',
    GRAY_DARK: '#495057',
    PRIMARY: '#40A4FF',
    SECONDARY: '#632342',
    TEXT: '#CCCCCC',
    MAIN: '#009BCF',
    POINT: '#FFD166',
    GREEN: '#2A9D8F',
    RED: '#EF476F'
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
  COLOR_SCHEME: '#111111',

  TITLE: '#F8F9FA',
  TEXT: '#E9ECEF',
  DEEP_BLUE: '#013A63',

  BACKGROUND_OPPOSITE: '#F2E9E4',
  BACKGROUND: '#22223B',
  SURFACE: '#4A4E69',

  NAVIGATION_BACKGROUND: 'rgba(53, 62, 72, 0.95)',

  OPACITY_BORDER: 'rgba(255, 255, 255, 0.1)',

  GRAY: '#93939D',
  ICON: '#A3A3Ad',

  BUTTON_TEXT: '#F9F9F9',
  BUTTON: '#4A518D',
  }
};
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    COLOR_SCHEME: '#EEEEEE',

    TITLE: '#212529',
    TEXT: '#343A40',
    DEEP_BLUE: '#01497C',

    BACKGROUND_OPPOSITE: '#22223B',
    BACKGROUND: '#F2E9E4',
    SURFACE: '#AEA4A9',
    NAVIGATION_BACKGROUND: 'rgba(228, 253, 243, 0.95)',

    OPACITY_BORDER: 'rgba(0, 0, 0, 0.1)',

    GRAY: '#23232D',
    ICON: '#53535D',

    BUTTON_TEXT: '#474747',
    BUTTON: '#647AC5',
  }
};

type FontTypes = typeof DefaultTheme.fonts;
type ColorTypes = typeof DefaultTheme.colors;

export { darkTheme, lightTheme, FontTypes, ColorTypes };
