// UserScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import {UserStackScreenProps} from "routes/UserStack";
import HeaderNavBar from "routes/components/HeaderNavBar";
import {SText} from "components";
import Spacing from "styles/Spacing";
import styled from "styled-components/native";
import Margin from "src/components/Margin";



const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.BACKGROUND};
    justify-items: center;
`

const NotificationOptionBox = styled.TouchableOpacity`
    width: 80%;
    height: ${Spacing.box.sm}px;
    margin-left: 10%;
    background-color: ${({theme}) => theme.colors.PRIMARY};
    justify-content: center;
  border-radius: 10px;
`;

const UserScreen : FC<UserStackScreenProps<'User'>> = ({navigation, route}) => {
    const {theme} = useThemes()

  console.log(`UserScreen.tsx: route.params?.userId: ${route.params?.userId}`)

  return (
          <Container>
            <HeaderNavBar display canGoBack theme={theme} title="My Page" />
            <Margin nav mb={10}/>

            <NotificationOptionBox>
              <SText size={Spacing.font.md} >Welcome to My Page!</SText>
            </NotificationOptionBox>

            <SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
            <BottomNavBar display theme={theme} />
          </Container>
  );
}

export default UserScreen;