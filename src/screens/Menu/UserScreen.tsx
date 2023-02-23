// UserScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackScreenProps } from '@react-navigation/stack';
import BottomNavBar from "routes/components/BottomNavBar";
import {useNavigation} from "@react-navigation/native";
import {UserNavigationProp} from "routes/UserStack";
import useThemes from "src/hooks/useTheme";

type UserScreenProps = StackScreenProps<RootStack.MenuStackParamList, 'UserScreen'>;

const UserScreen : FC<UserScreenProps> = ({route}) => {
    const navigation = useNavigation<UserNavigationProp<'UserScreen'>>()
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
