// UserScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import {UserStackScreenProps} from "routes/UserStack";



const UserScreen : FC<UserStackScreenProps<'UserScreen'>> = ({navigation, route}) => {
    const {theme} = useThemes()

  return (
    <View style={StyleSheet.absoluteFill}>
      <Text>Welcome to the User screen!</Text>
      <Button title="Go to User Detail screen" onPress={() => navigation.navigate('UserDetail', { userId: route.params?.userId})} />
      <BottomNavBar display theme={theme}/>
    </View>
  );
}

export default UserScreen;
