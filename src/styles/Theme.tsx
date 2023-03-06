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
    RED: '#EF476F',

    BENTO_GRAY: '#DBDBDB',

    YOUTUBE_RED: '#FF0000',
    FINTEREST_RED: '#E60023',
    AMAZON_ORANGE: '#FF9900',
    SUBSTACK_ORANGE: '#FF6719',
    REDDIT_ORANGE:'#FF4500',
    BENTO_PEACH: '#FF8686',
    Ko_fi_red: '#FF5D5E',
    GUMROAD_PINK: '#FF90E8',
    DRIBBBLE_PINK: '#EA4C89',
    BMAC_yellow: '#FFDD00',
    CLUBHOUSE_YELLOW: '#FFE450',
    SNAPCHAT_YELLOW: '#FFFC00',
    LINKTREE_GREEN : '#D2E823',
    BENTO_GREEN: '#5AFF88',
    SPOTIFY_GREEN: '#1ED760',
    Ko_fi_blue: '#13C3FF',
    TWITTER_blue: '#1DA1F2',
    FACEBOOK_BLUE: '#1877F2',
    META_BLUE_SOLID: '#0080F9',
    GITHUB_BLUE: '#4078C0',
    META_BLUE_GRADIENT: 'linear-gradient(180deg, #0080FA 0%, #0668E1 100%)',
    BENTO_LAVENDER: '#768CFF',
    LOOM_PURPLE: '#625DF5',
    STRIPE_PURPLE: '#635BFF',
    MASTODON_PURPLE_SOLID: '#6364FF',
    TWITCH_VIOLET: '#9146FF',
    PAYpAL_BLUE: '#003087',

    DISCORD_PURPLE: '#5865F2',
    FIGMA_VIOLET:'#A259FF',
    INSTAGRAM_VIOLET: '#833AB4',

    PRODUCT_HUNT_ORANGE: '#DA552F',
    APPLE_GRAY: '#8F8F8F',


    LAYERS_BLACK: '#111827',
    LINKTREE_BLACK : '#1E2330',
    ETHEREUM: 'linear-gradient(135deg, #B8FAF6 0%, #F0CDC2 33.33%, #C9B3F5 66.67%, #88AAF1 100%)',
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
