import 'styled-components';
import {ColorTypes, FontTypes} from "styles/Theme";

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
    } & ColorTypes & colorSetType,
    fonts: FontTypes
  }
}

type colorSetType = Record<string, string>
