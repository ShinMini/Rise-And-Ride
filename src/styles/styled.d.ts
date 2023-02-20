import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      WHITE: string,
      BLACK: string,
      GRAY: string,
      GRAY_LIGHT: string,
      GRAY_DARK: string,
      PRIMARY: string,
      SECONDARY: string,
      TITLE: string,
      TEXT: string,

      BACKGROUND: string,
      BUTTON_TEXT: string,
      BUTTON: string,
    } & colorSetType,
    fonts: {
      normal: string,
      thin: string,
      medium: string,
      bold: string,
      big: string
    }
  }
}

type colorSetType = Record<string, string>
