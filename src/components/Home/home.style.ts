// constant card size data
import {Dimensions, StyleSheet} from "react-native";
import styled from "styled-components/native";
import {Bold, Regular, Thin} from "styles/Typo";

const {width, height} = Dimensions.get('window');
// modu cards size
const [CARD_WIDTH, CARD_HEIGHT] = [270, 170];

/** ------------ styled components  ----------------*/
const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.BACKGROUND};
`

const ContentButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${CARD_WIDTH}px;
  align-self: center;

  padding: 20px 0;
  margin-top: 20px;
  margin-bottom: 60px;

  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.FLAT_LIST_BACKGROUND};
`;

const ButtonText = styled(Bold)`
  color: ${({theme}) => theme.colors.TEXT};
  font-family: ${({theme}) => theme.fonts.Stylish};
`

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const HeaderText = styled(Bold)`
  color: ${({theme}) => theme.colors.PRIMARY};
  font-size: 26px;

  padding: 15px 10px;

`
const ContentText = styled(Regular)`
  color: ${({theme}) => theme.colors.TEXT};
  text-align: left;
  padding: 10px 20px;
`;

const SmallText = styled(Thin)`
  color: ${({theme}) => theme.colors.GRAY_LIGHT};
  text-align: left;
  padding: 10px 20px;
  margin-bottom: 140px;

  font-size: 12px;
`;

const PaddingBox = styled.View<{size?: number}>`
  padding: ${({size}) => size || 30}px 0;
`

export const Separator = styled.View<{size?: number}>`
  width: 85%;
  height: 1px;

  margin: ${({size}) => size || 10}px 0;

  background-color: ${({theme}) => theme.colors.GRAY};
`
export {ContentText, SmallText ,ContentContainer, Container, ButtonText, HeaderText, ContentButton, CARD_HEIGHT, CARD_WIDTH, PaddingBox, width, height}

export const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,

    top: 120,
    left: (width - CARD_WIDTH) / 2,
  },
  shadow :{
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,

    elevation: 5,
  },
  scrollView: {
    zIndex: 5,
    overflow: 'hidden'
  },
  scrollContentContainer: {
    width,

    alignItems: 'center',
  },
  image: {
    width: width - 40,
    height: 500,
    resizeMode: 'contain',

    borderRadius: 20,
    marginVertical: 20,
  },
})
