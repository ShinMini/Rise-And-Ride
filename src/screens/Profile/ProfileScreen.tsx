// ProfileScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import BottomNavbar from "routes/BottomNavbar";
import {ProfileNavigationProp} from "routes/ProfileStack";
import {ProfileRouteProp} from "src/routes/ProfileStack";

const ProfileScreen: FC = () => {
  const navigation = useNavigation<ProfileNavigationProp<'ProfileScreen'>>();
  const route = useRoute<ProfileRouteProp<'ProfileScreen'>>()
  return (
    <View style={StyleSheet.absoluteFill}>
      <Text>Welcome to the Profile screen!</Text>
      <Button title="Go to Profile Detail screen" onPress={() => navigation.navigate('ProfileDetail', {username: 'hyeon min'})} />
        <BottomNavbar />
    </View>
  );
}

export default ProfileScreen;
