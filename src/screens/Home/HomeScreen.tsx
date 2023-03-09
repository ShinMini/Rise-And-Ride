import React, {FC} from 'react'
import {StyleSheet} from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

// import skia module for svg loading
import HeaderNavBar from "routes/components/HeaderNavBar";
import { Container} from "src/components/Card/home.style";
import useThemes from "src/hooks/useTheme";
import BottomNavBar from 'src/routes/components/BottomNavBar';
import styled from 'styled-components/native';

import Spacing from 'src/styles/Spacing';
import { Margin } from 'src/components';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const BOX_SIZE = Spacing.box.lg;
const BOX_MARGIN = Spacing.box.lg / 4; 

const BoxContainer = styled(Animated.View)`
    flex-direction: row;
    flex: 1;
`
const Box = styled.View<{boxColor?: string}>`
    background-color: ${({ theme, boxColor }) => boxColor || theme.colors.SPOTIFY_GREEN};

    width: ${BOX_SIZE}px;
    height: ${BOX_SIZE}px;

    margin-horizontal: ${BOX_MARGIN}px;

    border-radius: ${BOX_SIZE / 2}px;
`

/** ----------- Main Content ----------------- */
const HomeScreen: FC = () => {
    const {theme} = useThemes();

    const translateX = useSharedValue(0)
    // const translateY = useSharedValue(0)
    const context = useSharedValue({x: 0, y: 0})

    const Pan = Gesture.Pan();
    Pan.onStart(() => {

    }).onUpdate((event) => {
        translateX.value = event.translationX + context.value.x
        // translateY.value = event.translationY + context.value.y
    }
    ).onEnd((event) => {
        translateX.value = 0
        // translateY.value = 0
    })

    // gesture 에 따른 카드별 애니메이션 생성,
    const modelBoxAnimation = useAnimatedStyle(() => ({
        transform: [
            {translateX: translateX.value},
            // {translateY: translateY.value},
        ]}))


    return (
            <Container>
                <HeaderNavBar display title="Mini ML Model" animate theme={theme}/>
                <Margin pb={Spacing.navbar.header.height + 20} />
                <GestureDetector gesture={Pan}>

                <BoxContainer>
                    <Box style={[modelBoxAnimation]} />
                    <Box boxColor={theme.colors.AMAZON_ORANGE} style={[modelBoxAnimation]} />
                    <Box boxColor={theme.colors.APPLE_GRAY} style={[modelBoxAnimation]}  />
                    <Box boxColor={theme.colors.BENTO_LAVENDER} style={[modelBoxAnimation]}  />
                    </BoxContainer>
                </GestureDetector>

                <BottomNavBar display animate theme={theme}/>
            </Container>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
})
