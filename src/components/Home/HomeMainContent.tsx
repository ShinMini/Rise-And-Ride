import React, {FC} from 'react'
import styled from 'styled-components/native'
import {Bold, Regular} from "styles/Typo";
import {Dimensions, ScrollView, StyleSheet} from "react-native";

// import mini card svg files
import {MiniCardBlack, MiniCardPurPle, MiniCardWhite} from 'assets/svg/mini_card';

// import modu cards
import {BlueBackgroundMobyCard, GridMobyCard, RidingMobyCard, WhiteBackgroundMobyCard} from 'assets/svg/modu_card';

// import skia module for svg loading
import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";
import {useNavigation} from "@react-navigation/native";
import {HomeNavigationProp} from "routes/HomeStack";


/** ------------ styled components  ----------------*/
const Container = styled.View`
    flex: 1;
`

const ContentButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 80%;
    align-self: center;

    padding: 20px 30px;
    border-radius: 15px;

    background-color: ${({theme}) => theme.colors.BUTTON};
`;

const ContentText = styled(Bold)`
    color: ${({theme}) => theme.colors.POINT};
    font-family: ${({theme}) => theme.fonts.Stylish};
`

/** ----------- Main Content ----------------- */

// constant card size data
const {width, height} = Dimensions.get('window');
// mini cards size
// const [CARD_WIDTH, CARD_HEIGHT] = [213, 338];

// modu cards size
const [CARD_WIDTH, CARD_HEIGHT] = [270, 170];
// constant data for testing
const DATA = new Array(10).fill(0).map((_, index) => ({cardId: Math.floor(Math.random() * 1000).toString(), index}));

type tempDataType = {
    cardId: string;
    index: number;
}

const HomeMainContent: FC = () => {
    // modu card
    const cards = [ useSVG(BlueBackgroundMobyCard), useSVG(WhiteBackgroundMobyCard), useSVG(GridMobyCard), useSVG(RidingMobyCard)]
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);

    const navigation = useNavigation<HomeNavigationProp<'HomeScreen'>>();

    const isDark = useSelector((state: ColorSchemeState) => state.dark)

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const changeCard = (direction: number) => {
        if(direction === 1) {
            if(activeCardIndex === cards.length - 1) {
                setActiveCardIndex(0)
            }
            else {
                setActiveCardIndex(activeCardIndex + 1)
            }
        }
        else {
            if(activeCardIndex === 0) {
                setActiveCardIndex(cards.length - 1)
            }
            else {
                setActiveCardIndex(activeCardIndex - 1)
            }
        }
    }

    const gesture = Gesture.Pan();

    const context = useSharedValue({x: 0, y: 0})
    gesture.onBegin(() => {
        context.value = {x: translateX.value, y: translateY.value}
    }).onUpdate((event) => { // gesture 이벤트가 발생할 때마다 실행
        translateX.value = event.translationX + context.value.x
        translateY.value = event.translationY + context.value.y
    }).onEnd((event) => { // gesture 이벤트가 끝날 때 실행
        if(Math.abs(event.translationX) > width / 5 || Math.abs(event.translationY) > height / 5) {
            let direction = event.translationX > 0 ? 1 : -1

            // move card away and change card
            translateX.value = withTiming(event.translationX * 3)
            translateY.value = withTiming(event.translationY * 3)

            // change card()
            setTimeout(() => {
                changeCard(direction)
                translateX.value = withTiming(0)
                translateY.value = withTiming(0)
            }, 500);
        }
        else {
            translateX.value = withTiming(0)
            translateY.value = withTiming(0)
        }
    })
    // gesture 에 따른 카드별 애니메이션 생성,
    const cardAnim = useAnimatedStyle(() => ({
        width,
        height: CARD_HEIGHT + 120,

        alignItems: 'center',
        justifyContents: 'center',

        transform: [
            {translateX: withSpring(translateX.value)},
            {translateY: withSpring(translateY.value)},
        ]}))

    if(cards)
        return (
                <Container>
                    <GestureDetector gesture={gesture} >
                        <Animated.View style={cardAnim}>
                            <Canvas style={[styles.canvas, styles.shadow, {shadowColor: isDark ? 'white' : 'black'}]}>
                                <ImageSVG svg={cards[activeCardIndex]!} x={0} y={0} width={CARD_WIDTH} height={CARD_HEIGHT} />
                            </Canvas>
                        </Animated.View>
                    </GestureDetector>
                    <ScrollView
                            bounces={false}
                    >
                        <ContentButton onPress={() => navigation.navigate('HomeDetail')}
                                      style={[styles.shadow, {shadowColor: isDark ? 'white' : 'black'}]}
                        >
                            <ContentText>Get the Card !</ContentText>
                        </ContentButton>
                    </ScrollView>
                </Container>
        )

    return <></>
}

export default HomeMainContent;

const styles = StyleSheet.create({
    canvas: {
        position: 'absolute',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,

        top: 60,
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
    }
})


// 함수임, 나가는 방향을 받아옴, 1, 또는 -1, 들어온 방향에 따라 인덱스 값을 설정해줌, 그리고 그 인덱스에 해당하는 카드를 렌더링함 인덱스 수는 0부터 2까지의 수,
// 들어온 방향으로 이동시킬 때 인덱스 번호를 넘어가는 경우, 0으로 돌아가거나 2로 돌아가는 경우를 처리해줘야함
