import React, {FC} from 'react'
import {ScrollView} from "react-native";

// import modu cards
import {BlueBackgroundMobyCard, GridMobyCard, RidingMobyCard, WhiteBackgroundMobyCard} from 'assets/svg/modu_card';

// import skia module for svg loading
import { useSVG } from "@shopify/react-native-skia";
import HeaderNavBar from "routes/components/HeaderNavBar";
import { Container, Separator, styles } from "src/components/Home/home.style";
import HomeCardView from "src/components/Home/HomeCardView";
import {StackNavigationProp} from "@react-navigation/stack";
import CardServiceContent from "src/components/Home/CardServiceContent";
import CardUsageGraph from "src/components/Home/CardUsageGraph";
import useThemes from "src/hooks/useTheme";

/** ----------- Main Content ----------------- */
type HomeScreenProps = {
    navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

const HomeScreen: FC<HomeScreenProps> = () => {
    // modu card
    const cards = [ useSVG(BlueBackgroundMobyCard), useSVG(WhiteBackgroundMobyCard), useSVG(GridMobyCard), useSVG(RidingMobyCard)]
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const [displayHeader, setDisplayHeader] = React.useState(true);
    const [currentScrollOffsetY, setCurrentScrollOffsetY] = React.useState(0);
    const {isDark, theme, toggleButton} = useThemes();

    return (
            <Container>
                <HeaderNavBar display={displayHeader} title="Modu Card"  animate theme={theme}/>

                <ScrollView
                        style={[styles.scrollView]}
                        scrollEventThrottle={8}
                        contentContainerStyle={styles.scrollContentContainer}
                        onMomentumScrollBegin={({nativeEvent}) => { setCurrentScrollOffsetY(nativeEvent.contentOffset.y) }}
                        onScroll={({nativeEvent}) => { (currentScrollOffsetY > nativeEvent.contentOffset.y)  ? setDisplayHeader(true) : setDisplayHeader(false) }}
                >

                    <HomeCardView key="HomeCardView_Home" cards={cards} activeCardIndex={activeCardIndex} isDark={isDark} setActiveCardIndex={setActiveCardIndex} />

                    <Separator />

                    <CardServiceContent />

                    <CardUsageGraph />


                </ScrollView>

                {/*<BottomNavBar display={displayHeader} animate/>*/}
            </Container>
    )
}
export default HomeScreen;
