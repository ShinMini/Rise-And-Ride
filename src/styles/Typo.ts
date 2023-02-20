import styled from "styled-components/native";
import Animated from 'react-native-reanimated';

const fontList = {
  Jua: 'Jua',
  NunitoRegular: 'Nunito-Regular',
  NunitoLight: 'Nunito-Light',
  NunitoBold: 'Nunito-Bold',
  Stylish: 'Stylish',
  Yeon: 'Yeon',
}

interface TextProps {
  color?: string;
  fontSize?: number;
  align?: 'left' | 'center' | 'right';
  fontFamily?: keyof typeof fontList;
}

const Thin = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? fontList[fontFamily] : fontList.NunitoLight};
  font-weight: 100;
  font-size: ${({fontSize}) => fontSize || 15}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const Regular = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? fontList[fontFamily] : fontList.NunitoRegular};
  font-weight: normal;
  font-size: ${({fontSize}) => fontSize || 18}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const Medium = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? fontList[fontFamily] : fontList.NunitoRegular};
  font-weight: 500;
  font-size: ${({fontSize}) => fontSize || 24}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;


const Bold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? fontList[fontFamily] : fontList.NunitoBold};
  font-weight: 700;
  font-size: ${({fontSize}) => fontSize || 27}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const ExtraBold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? fontList[fontFamily] : fontList.NunitoBold};
  font-weight: 900;
  font-size: ${({fontSize}) => fontSize || 30}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

export {Thin, Regular, Medium, Bold, ExtraBold};
