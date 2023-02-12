import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string,
      black: string,
    } & colorSetType,
    fonts: {
      normal: string,
    }
  }
}

type colorSetType = Record<string, string>