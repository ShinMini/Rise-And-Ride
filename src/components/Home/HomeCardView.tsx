import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import {Canvas, ImageSVG, SkSVG} from "@shopify/react-native-skia";
import {styles} from "src/components/Home/home.style";
import React from "react";
import styled from "styled-components/native";
import {MotiView} from "moti";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
const [CARD_WIDTH, CARD_HEIGHT] = [270, 170];

const CardAnimationView = styled(MotiView)`
    width: 100%;
    height: ${CARD_HEIGHT + 60}px;

    align-items: center;
    justify-content: center;
`

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
            {translateX: withSpring(translateX.value)},
            {translateY: withSpring(translateY.value)},
        ]}))

    return (
            <CardAnimationView
                    from={{translateY: -100}}
                    animate={{translateY: 0}}
                    exit={{translateY: -100}}
                    transition={{type: 'timing', duration: 500}}
            >
                <GestureDetector gesture={gesture} >
                    <Animated.View style={cardAnim}>
                        <Canvas style={[styles.canvas, styles.shadow, {shadowColor: isDark ? 'white' : 'black'}]}>
                            <ImageSVG svg={cards[activeCardIndex]!} x={0} y={0} width={CARD_WIDTH} height={CARD_HEIGHT} />
                        </Canvas>
                    </Animated.View>
                </GestureDetector>
            </CardAnimationView>
    )
}

export default HomeCardView
