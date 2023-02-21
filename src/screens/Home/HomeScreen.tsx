import React, { FC } from "react";

// import navigation types
import { StackNavigationProp } from '@react-navigation/stack';
import BottomNavbar from "routes/BottomNavbar";
// import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
// import {HomeRouteProp} from "src/routes/HomeStack";

import {Bold} from "styles/Typo";
import styled from "styled-components/native";


// import moducard images
// import {BlueBackgroundMobyCard, GridMobyCard, RidingMobyCard, WhiteBackgroundMobyCard} from 'assets/svg/modu_card';
// import ModuCardFlatList from "src/components/Home/ModuCardFlatList";
// const MODU_CARD_DATA_STR = [BLUE_BACKGROUND_MOBY_CARD, WHITE_BACKGROUND_MOBY_CARD, GRID_MOBY_CARD, RIDING_MOBY_CARD]


import HomeMainContent from "src/components/Home/HomeMainContent";

/** ------------ styled components  ----------------*/
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

// <Container
//         contentContainerStyle={{justifyContent: 'center'}}
//         showsHorizontalScrollIndicator={false}
// >
// </Container>
/** ----------- Main Content ----------------- */
type HomeScreenProps = {
    navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

const HomeScreen: FC<HomeScreenProps> = () => {

    return (
            <Container>
                <HomeMainContent />
                <BottomNavbar />
            </Container>
    );
}

export default HomeScreen;
