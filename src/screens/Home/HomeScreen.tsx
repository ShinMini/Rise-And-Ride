import React, {FC} from 'react'
import {ScrollView} from "react-native";

// import modu cards
import {BlueBackgroundMobyCard, GridMobyCard, RidingMobyCard, WhiteBackgroundMobyCard} from 'assets/svg/modu_card';

// import skia module for svg loading
import { useSVG } from "@shopify/react-native-skia";
import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";
import {useNavigation} from "@react-navigation/native";
import {HomeNavigationProp} from "routes/HomeStack";
import BottomNavbar from "routes/components/BottomNavbar";
import HeaderNavBar from "routes/components/HeaderNavBar";
import {
    ButtonText,
    Container,
    ContentButton,
    styles
} from "src/components/Home/home.style";
import StandardTerms from "src/components/Home/StandardTerms";
import HomeContent from "src/components/Home/HomeContent";
import HomeCardView from "src/components/Home/HomeCardView";

import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

/** ----------- Main Content ----------------- */
const HomeScreen: FC<HomeScreenProps> = () => {
    // modu card
    const cards = [ useSVG(BlueBackgroundMobyCard), useSVG(WhiteBackgroundMobyCard), useSVG(GridMobyCard), useSVG(RidingMobyCard)]
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const [displayHeader, setDisplayHeader] = React.useState(true);
    const [currentScrollOffsetY, setCurrentScrollOffsetY] = React.useState(0);

    const navigation = useNavigation<HomeNavigationProp<'HomeScreen'>>();
    const isDark = useSelector((state: ColorSchemeState) => state.dark)

    return (
            <Container>
                <HeaderNavBar display={displayHeader} headerTitle="Modu Card" />

                <ScrollView
                        style={[styles.scrollView]}
                        scrollEventThrottle={8}
                        onMomentumScrollBegin={({nativeEvent}) => {
                            setCurrentScrollOffsetY(nativeEvent.contentOffset.y)
                        }}
                        onScroll={({nativeEvent}) => {
                            // scroll up
                            if(currentScrollOffsetY > nativeEvent.contentOffset.y)  return setDisplayHeader(true)
                            // scroll down
                            setDisplayHeader(false)
                        }}
                >
                    <HomeCardView key="HomeCardView_Home" cards={cards} activeCardIndex={activeCardIndex} isDark={isDark} setActiveCardIndex={setActiveCardIndex} />

                    <HomeContent key="HomeContent_Home" />

                    <ContentButton key="ContentButton_Home" onPress={() => navigation.navigate('HomeDetail', {cardId: activeCardIndex})}
                                   style={[styles.shadow, {shadowColor: isDark ? 'white' : 'black'}]}
                    >
                        <ButtonText>Get the Card !</ButtonText>
                    </ContentButton>

                    <StandardTerms key="StandardTerms_Home" />
                </ScrollView>

                <BottomNavbar display={displayHeader}/>
            </Container>
    )
}
export default HomeScreen;
