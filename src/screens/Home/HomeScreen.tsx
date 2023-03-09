import React, { FC } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated'

// import skia module for svg loading
import HeaderNavBar from 'routes/components/HeaderNavBar'
import { Container } from 'src/components/Card/home.style'
import useThemes from 'src/hooks/useTheme'
import BottomNavBar from 'src/routes/components/BottomNavBar'
import styled from 'styled-components/native'

import Spacing from 'src/styles/Spacing'
import { Margin } from 'src/components'
import Box from '../Card/Box'

const { width, height } = Dimensions.get('window')

const BOX_SIZE = Spacing.box.lg
const BOX_RADIUS = BOX_SIZE / 2
const BOX_MARGIN = (width - BOX_SIZE) / 2

const BoxContainer = styled.ScrollView``

/** ----------- Main Content ----------------- */
const HomeScreen: FC = () => {
  const { theme } = useThemes()

  const translateX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x
  })

  const boxColors = [
    theme.colors.BENTO_GREEN,
    theme.colors.AMAZON_ORANGE,
    theme.colors.APPLE_GRAY,
    theme.colors.BENTO_LAVENDER
  ]

  return (
    <Container>
      <HeaderNavBar display title="Mini ML Model" animate theme={theme} />
      <Margin pb={Spacing.navbar.header.height + 20} />

      <BoxContainer
        contentContainerStyle={styles.container}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={scrollHandler}>
        {boxColors.map((color, index) => (
          <Box
            index={index}
            key={`BOX_Content_${index.toString()}`}
            boxColors={color}
            translateX={translateX}
          />
        ))}
      </BoxContainer>

      <BottomNavBar display animate theme={theme} />
    </Container>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: width * 4,
    height: BOX_SIZE + BOX_MARGIN,
    flexDirection: 'row'
  }
})
