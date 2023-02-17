import React, { FC } from "react";
import { Image} from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';
import { Container, MainText } from "./styles";
import {SButton, SText} from 'components'
import {toggleTheme} from 'stores';
import { useDispatch } from 'react-redux';
import BottomNavbar from "routes/BottomNavbar";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};


const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
    const dispatch = useDispatch();

    const toggleButton = () => dispatch(toggleTheme());

  return (
    <Container>
      <Image source={require('assets/favicon.png')} />
      <MainText>Welcome to the Home screen!</MainText>
      <SButton onPress={() => navigation.navigate('User', { userId: 'min121234' })} >
        <SText>User</SText>

      </SButton>
      <SButton onPress={() => navigation.navigate('Profile')}><SText>Profile</SText></SButton>

        <SButton onPress={toggleButton} style={{marginBottom: 30}}>
          <SText>Toggle Theme</SText>
        </SButton>
        <BottomNavbar />
    </Container>
    );
}

export default HomeScreen;
