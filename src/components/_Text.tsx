import {StyleProp, TextStyle} from "react-native";
import styled                 from "styled-components/native";

type _TextProps = {
  color?: string;
  size?: number;
  position?: 'left' | 'right';
  textStyle?: StyleProp<TextStyle>
  text: string
}

const SText= styled.Text<_TextProps>`

  color: ${({theme, color}) => color || theme.colors.TEXT};
  font-size: ${({ size }) => size || 25}px;
  text-align: ${({ position }) => position || 'center'};
`

const _Text = () => {

}

export default _Text;