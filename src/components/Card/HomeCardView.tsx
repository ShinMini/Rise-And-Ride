import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import {Canvas, ImageSVG, SkSVG} from "@shopify/react-native-skia";
import {PaddingBox, styles} from "src/components/Card/home.style";
import React from "react";
import styled from "styled-components/native";
import {MotiView} from "moti";
import {Dimensions} from "react-native";
import {DigitThin, Thin} from "styles/Typo";

const {width, height} = Dimensions.get('window');
const [CARD_WIDTH, CARD_HEIGHT] = [270, 170];

const CardAnimationView = styled(MotiView)`
    width: 100%;
    height: ${CARD_HEIGHT + 60}px;

    align-items: center;
    justify-content: center;
`

const CardNumber = styled(DigitThin)`
    font-size: 22px;
    font-weight: 700;

    padding-top: 10px;
    right: ${CARD_WIDTH * 0.25}px;
`

const CardOwnerName = styled(Thin)`
    color: ${({theme}) => theme.colors.TEXT};
    padding: 5px 0 5px ${CARD_WIDTH * 0.75}px;
`;

type HomeCardViewProps = {
    cards: Array<SkSVG | null>
    activeCardIndex: number
    isDark: boolean
    setActiveCardIndex: React.Dispatch<React.SetStateAction<number>>
}

const HomeCardView: React.FC<HomeCardViewProps> = ({cards, activeCardIndex, isDark, setActiveCardIndex}) => {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const gesture = Gesture.Pan();

    const changeCard = (direction: number) => {
        if(direction === 1) {
            return (activeCardIndex === cards.length -1) ? setActiveCardIndex(0) : setActiveCardIndex(activeCardIndex + 1)
        }
        else {
            (activeCardIndex === 0) ? setActiveCardIndex(cards.length -1) : setActiveCardIndex(activeCardIndex - 1)
        }
    }

    const context = useSharedValue({x: 0, y: 0})

    gesture.onBegin(() => {
        context.value = {x: translateX.value, y: translateY.value}
    }).onUpdate((event) => { // gesture 이벤트가 발생할 때마다 실행
        translateX.value = withSpring(event.translationX + context.value.x)
        translateY.value = withSpring(interpolate(event.translationY + context.value.y, [-width / 2, 0, width / 2], [-height / 4, 0, height / 4]))
    }).onEnd((event) => { // gesture 이벤트가 끝날 때 실행
        if(Math.abs(event.translationX) > width / 5 || Math.abs(event.translationY) > height / 5) {
            let direction = event.translationX > 0 ? 1 : -1

            // move card away and change card
            translateX.value = withSpring(event.translationX * 3)
            translateY.value = withSpring(event.translationY * 3)

            // change card()
            setTimeout(() => {
                changeCard(direction)
                translateX.value = - event.translationX * 3
                translateY.value = - event.translationY * 3

                translateX.value = withTiming(0)
                translateY.value = withTiming(0)
            }, 300);
        }
        else {
            translateX.value = withTiming(0)
            translateY.value = withTiming(0)
        }
    })

    // gesture 에 따른 카드별 애니메이션 생성,
    const cardAnim = useAnimatedStyle(() => ({
        width,
        height: CARD_HEIGHT + 60,
        transform: [
            {translateX: translateX.value},
            {translateY: translateY.value},
        ]}))

    return (
            <>
                <CardAnimationView
                        from={{translateY: -100}}
                        animate={{translateY: 0}}
                        exit={{translateY: -100}}
                        transition={{type: 'timing', duration: 500}}
                >
                    <GestureDetector gesture={gesture} >
                    <Animated.View style={cardAnim}>
                        <Canvas style={[styles.canvas]}>
                            <ImageSVG svg={cards[activeCardIndex]!} x={0} y={0} width={CARD_WIDTH} height={CARD_HEIGHT} />
                        </Canvas>
                    </Animated.View>
                    </GestureDetector>
                </CardAnimationView>

                <PaddingBox />
                <CardNumber>5171 4455 2211 0000</CardNumber>
                <CardOwnerName>Hyeon Min Shin</CardOwnerName>
            </>
    )
}

export default HomeCardView
