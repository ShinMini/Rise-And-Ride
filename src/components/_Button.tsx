import styled from "styled-components/native";
import React from "react";
import {StyleProp, TextStyle} from "react-native";
import SText from "src/components/_Text";

const _SButton= styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.BUTTON};
  padding: 20px 60px;

  color: ${({theme}) => theme.colors.BUTTON_TEXT};
  font-size: 20px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;
`

const ButtonText = styled(SText)<{color?: string; size?: number; position?: 'left' | 'right'}>`
  color: ${({theme, color}) => color ? color : theme.colors.BUTTON_TEXT};
  font-size: ${({size}) => size ? size : 20}px;
  text-align: ${({position}) => position ? position : 'center'};
`


type SButtonProps = {
  children?: React.ReactNode;
  onPress: () => void;

  title?: {
    color?: string;
    size?: number;
    position?: 'left' | 'right';
    textStyle?: StyleProp<TextStyle>
    text: string
  }
}

const SButton: React.FC<SButtonProps> = ({children, onPress, title}) => {
  return (
    <_SButton onPress={onPress} >
      {children && children}
      {title && title.text}
    </_SButton>
  )
}

export default SButton;