import React, { FC } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import BottomNavbar from "routes/BottomNavbar";
import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import {HomeRouteProp} from "src/routes/HomeStack";
import {Bold} from "styles/Typo";

// import skia module for svg loading
import {
 SkSVG,
    useSVG
} from "@shopify/react-native-skia";

// import moducard images
import BLUE_BACKGROUND_MOBY_CARD from "assets/svg/modu_card/blue_background_moby_card.svg";
import WHITE_BACKGROUND_MOBY_CARD from "assets/svg/modu_card/white_background_moby_card.svg";
import GRID_MOBY_CARD from "assets/svg/modu_card/grid_moby_card.svg";
import RIDING_MOBY_CARD from "assets/svg/modu_card/riding_moby_card.svg";
import styled from "styled-components/native";
import ModuCardFlatList from "src/components/Home/ModuCardFlatList";
import HomeMainContent from "src/components/Home/HomeMainContent";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

const MODU_CARD_DATA_STR = [BLUE_BACKGROUND_MOBY_CARD, WHITE_BACKGROUND_MOBY_CARD, GRID_MOBY_CARD, RIDING_MOBY_CARD]

const HeaderText = styled(Bold)`
    padding: 15px 0;
    font-family: ${({theme}) => theme.fonts.NunitoBold};

    color: ${({theme}) => theme.colors.TITLE};
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.colors.TITLE};
`;

const HomeScreen: FC<HomeScreenProps> = () => {
    // const navigation = useNavigation<NavigationProp<RootStack.RootParamList, 'Home'>>()
    // const route = useRoute<HomeRouteProp<'HomeScreen'>>()
    const MODU_CARD_DATA: Array<{svg: SkSVG | null}> = MODU_CARD_DATA_STR.map((item) => {
        return {svg: useSVG(item)}
    })

    return (
            <>
            <Container
                contentContainerStyle={{justifyContent: 'center'}}
                showsHorizontalScrollIndicator={false}
            >
                <ModuCardFlatList moduCardData={MODU_CARD_DATA} />
                <HeaderText>My Modu Card</HeaderText>
                <HomeMainContent />
            </Container>
            <BottomNavbar />
            </>
    );
}

export default HomeScreen;
