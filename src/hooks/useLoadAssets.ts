import type {DefaultFonts} from "styles/Theme";

type FontTypes = Record<keyof typeof DefaultFonts, NodeRequire>

export const customFonts= {
  /** custom fonts */
  Jua: require('assets/fonts/Jua/Jua-Regular.ttf'),

  NunitoRegular: require('assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  NunitoThin: require('assets/fonts/Nunito/static/Nunito-Light.ttf'),
  NunitoBold: require('assets/fonts/Nunito/static/Nunito-Bold.ttf'),

  Stylish: require('assets/fonts/Stylish/Stylish-Regular.ttf'),

  Yeon: require('assets/fonts/Yeon_Sung/YeonSung-Regular.ttf'),

  NaNumThin: require('assets/fonts/NaNum/NaNum-Thin.otf'),
  NaNumRegular: require('assets/fonts/NaNum/NaNum-Regular.otf'),
  NaNumMedium: require('assets/fonts/NaNum/NaNum-Medium.otf'),
  NaNumBold: require('assets/fonts/NaNum/NaNum-Bold.otf'),
  NaNumExtraBold: require('assets/fonts/NaNum/NaNum-ExtraBold.otf'),

  Roboto: require('assets/fonts/Roboto/Roboto-Regular.ttf'),

  /** custom digit fonts */
  DigitThin: require('assets/fonts/Digit/Thin/BaiJamjuree-Light.ttf'),
  DigitRegular: require('assets/fonts/Digit/Regular/HindMadurai-Regular.ttf'),
  DigitBold: require('assets/fonts/Digit/Bold/Ramabhadra-Regular.ttf'),
  DigitExtraBold: require('assets/fonts/Digit/ExtraBold/Bungee-Regular.ttf'),
} satisfies FontTypes;

