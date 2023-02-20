// UserScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackScreenProps } from '@react-navigation/stack';
import BottomNavbar from "src/routes/BottomNavbar";
import {useNavigation} from "@react-navigation/native";
import {UserNavigationProp} from "src/routes/UserStack";

type UserScreenProps = StackScreenProps<RootStack.UserStackParamList, 'UserScreen'>;

const UserScreen : FC<UserScreenProps> = ({route}) => {
    const navigation = useNavigation<UserNavigationProp<'UserScreen'>>()

  return (
    <View style={StyleSheet.absoluteFill}>
      <Text>Welcome to the User screen!</Text>
      <Button title="Go to User Detail screen" onPress={() => navigation.navigate('UserDetail', { userId: route.params?.userId})} />
      <BottomNavbar />
    </View>
  );
}

export default UserScreen;
