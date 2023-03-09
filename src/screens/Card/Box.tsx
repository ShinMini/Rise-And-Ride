import React from 'react'
import { FC } from 'react'
import { Dimensions } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate
} from 'react-native-reanimated'
import Spacing from 'src/styles/Spacing'
import styled from 'styled-components'

const { width, height } = Dimensions.get('window')
const BOX_SIZE = Spacing.box.lg
const BOX_RADIUS = BOX_SIZE / 2
const BOX_MARGIN = (width - BOX_SIZE) / 2

const _Box = styled(Animated.View)<{ boxColor: string }>`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-color: ${({ boxColor }) => boxColor};

  margin-horizontal: ${BOX_MARGIN}px;
  border-radius: ${BOX_RADIUS}px;
`

type BoxProps = {
  index: number
  boxColors: string
  translateX: Animated.SharedValue<number>
}

const Box: FC<BoxProps> = ({ index, boxColors, translateX }) => {
  const boxAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [width * (index - 1), width * index, width * (index + 1)],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ scale }]
    }
  })

  return <_Box boxColor={boxColors} style={boxAnimatedStyle} />
}

export default Box
