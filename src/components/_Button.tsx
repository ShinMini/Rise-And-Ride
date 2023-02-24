import styled from "styled-components/native";
import React from "react";
import {StyleProp, TextStyle, TouchableOpacityProps, ViewStyle} from "react-native";
import _Text, {_TextProps} from "src/components/_Text";

const SButton= styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.BUTTON};
  padding: 20px 60px;

  color: ${({theme}) => theme.colors.BUTTON_TEXT};
  font-size: 20px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;
`

const ButtonText = styled(_Text)<{color?: string; size?: number; position?: 'left' | 'right'}>`
  color: ${({theme, color}) => color ? color : theme.colors.BUTTON_TEXT};
  font-size: ${({size}) => size ? size : 20}px;
  text-align: ${({position}) => position ? position : 'center'};
`


export  type SButtonProps = {
  btnChildren?: React.ReactNode;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>

  isTitle?: boolean
  title?: _TextProps;
} & TouchableOpacityProps

const _Button: React.FC<SButtonProps> = ({btnChildren, onPress, title, buttonStyle, isTitle = false}) => {
  return (
    <SButton onPress={onPress} style={buttonStyle} >
      {btnChildren && btnChildren}
      {isTitle && <_Text {...title} /> }
    </SButton>
  )
}

export default _Button;