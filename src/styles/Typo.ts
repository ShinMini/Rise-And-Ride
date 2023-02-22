import styled from "styled-components/native";
import Animated from 'react-native-reanimated';

import {DefaultFonts} from "styles/Theme";

interface TextProps {
  color?: string;
  fontSize?: number;
  align?: 'left' | 'center' | 'right';
  fontFamily?: keyof typeof DefaultFonts;
}

const Thin = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.NaNumThin};
  font-weight: 100;
  font-size: ${({fontSize}) => fontSize || 15}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const Regular = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.NaNumRegular};
  font-weight: normal;
  font-size: ${({fontSize}) => fontSize || 18}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const Medium = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.NaNumMedium};
  font-weight: 500;
  font-size: ${({fontSize}) => fontSize || 24}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;


const Bold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.NaNumBold};
  font-weight: 700;
  font-size: ${({fontSize}) => fontSize || 27}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

const ExtraBold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.NaNumExtraBold};
  font-weight: 900;
  font-size: ${({fontSize}) => fontSize || 30}px;

  color: ${({color, theme}) => color || theme.colors.TEXT};
  text-align: ${({align}) => align || 'left'};
`;

export {Thin, Regular, Medium, Bold, ExtraBold};


const DigitThin = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.DigitThin};
  font-size: ${({fontSize}) => fontSize || 20}px;

  color: ${({color, theme}) => color || theme.colors.GRAY};
  text-align: ${({align}) => align || 'left'};
`;

const DigitRegular = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.DigitRegular};
  font-size: ${({fontSize}) => fontSize || 24}px;

  color: ${({color, theme}) => color || theme.colors.GRAY};
  text-align: ${({align}) => align || 'left'};
`;

const DigitBold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.DigitBold};
  font-size: ${({fontSize}) => fontSize || 24}px;

  color: ${({color, theme}) => color || theme.colors.GRAY};
  text-align: ${({align}) => align || 'left'};
`;

const DigitExtraBold = styled(Animated.Text)<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? DefaultFonts[fontFamily] : DefaultFonts.DigitExtraBold};
  font-size: ${({fontSize}) => fontSize || 24}px;

  color: ${({color, theme}) => color || theme.colors.GRAY};
  text-align: ${({align}) => align || 'left'};
`;

export {DigitRegular, DigitThin, DigitBold, DigitExtraBold};
