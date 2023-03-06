import styled from "styled-components/native";

export type TextProps = {
  color?: string;
  size?: number;
  position?: 'left' | 'right' | 'center';
}

const _Text= styled.Text<TextProps>`
  color: ${({theme, color}) => color || theme.colors.TEXT};
  font-size: ${({ size }) => size || 25}px;
  text-align: ${({ position }) => position || 'center'};
`

export default _Text;