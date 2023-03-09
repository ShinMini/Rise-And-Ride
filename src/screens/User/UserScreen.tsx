// UserScreen.tsx
import React, { FC } from 'react'
import useThemes from 'src/hooks/useTheme'
import { UserStackScreenProps } from 'routes/UserStack'
import HeaderNavBar from 'routes/components/HeaderNavBar'
import { _Text } from 'components'
import Spacing from 'styles/Spacing'
import styled from 'styled-components/native'
import Margin from 'src/components/Margin'
import FixFooterNavBar from 'routes/components/FixFooterNavBar'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  justify-items: center;
`

const NotificationOptionBox = styled.TouchableOpacity`
  width: 80%;
  height: ${Spacing.box.sm}px;
  margin-left: 10%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  justify-content: center;
  border-radius: 10px;
`

const UserScreen: FC<UserStackScreenProps<'User'>> = ({
  navigation,
  route
}) => {
  const { theme } = useThemes()

  console.log(`UserScreen.tsx: route.params?.userId: ${route.params?.userId}`)

  return (
    <Container>
      <HeaderNavBar
        title="My Page"
        display
        canGoBack
        theme={theme}
        color={theme.colors.POINT}
      />
      <Margin nav mb={10} />
      <NotificationOptionBox onPress={() => navigation.navigate('Home')}>
        <_Text size={Spacing.font.md}>Go back Home Screen</_Text>
      </NotificationOptionBox>

      <_Text size={Spacing.icon.md}>Welcome to the User Screen!</_Text>

      <FixFooterNavBar theme={theme} color={theme.colors.POINT} />
    </Container>
  )
}

export default UserScreen
