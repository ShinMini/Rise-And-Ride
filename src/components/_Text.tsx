import React from "react";
import {StyleProp, TextProps, TextStyle} from "react-native";
import styled from "styled-components/native";

export type _TextProps = {
  color?: string;
  size?: number;
  position?: 'left' | 'right';
  textStyle?: StyleProp<TextStyle>
  text?: string

  textChildren?: React.ReactNode;
} & TextProps

const SText= styled.Text<_TextProps>`
  color: ${({theme, color}) => color || theme.colors.TEXT};
  font-size: ${({ size }) => size || 25}px;
  text-align: ${({ position }) => position || 'center'};
`

const _Text: React.FC<_TextProps> = (props) => {
  const {color, size, position, textStyle, text, textChildren} = props;

  return (
    <_Text
      color={color}
      size={size}
      position={position}
      style={textStyle}
    >
      {textChildren && textChildren}
      {text && text}
    </_Text>
  )
}

export default _Text;