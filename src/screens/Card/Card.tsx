import React, {FC} from 'react'
import {ScrollView} from "react-native";

// import skia module for svg loading
import HeaderNavBar from "routes/components/HeaderNavBar";

import { Container, Separator, styles } from "src/components/Card/home.style";
import CardServiceContent from "src/components/Card/CardServiceContent";
import CardUsageGraph from "src/components/Card/CardUsageGraph";
import useThemes from "src/hooks/useTheme";
import BottomNavBar from 'src/routes/components/BottomNavBar';

const CardScreen: FC = () => {

    const [displayHeader, setDisplayHeader] = React.useState(true);
    const [currentScrollOffsetY, setCurrentScrollOffsetY] = React.useState(0);
    const {theme} = useThemes();

    return (
            <Container>
            <HeaderNavBar display={displayHeader} title="My Card" theme={theme} color={theme.colors.FACEBOOK_BLUE} />
                <ScrollView
                        style={[styles.scrollView]}
                        scrollEventThrottle={8}
                        contentContainerStyle={styles.scrollContentContainer}
                        onMomentumScrollBegin={({nativeEvent}) => { setCurrentScrollOffsetY(nativeEvent.contentOffset.y) }}
                        onScroll={({nativeEvent}) => { (currentScrollOffsetY > nativeEvent.contentOffset.y)  ? setDisplayHeader(true) : setDisplayHeader(false) }}
                >
                    <Separator key="CardScreen_main_S" />
                    <CardServiceContent key="CardScreen_CardServiceContent" />
                    <CardUsageGraph key="CardScreen_Graph" />
                </ScrollView>

            <BottomNavBar display theme={theme} color={theme.colors.FACEBOOK_BLUE} />
            </Container>
    )
}
export default CardScreen;