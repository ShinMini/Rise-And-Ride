// UserScreen.tsx
import React, { FC } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackScreenProps } from '@react-navigation/stack';
import BottomNavbar from "routes/components/BottomNavbar";
import {useNavigation} from "@react-navigation/native";
import {UserNavigationProp} from "src/routes/UserStack";
import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";

type UserScreenProps = StackScreenProps<RootStack.UserStackParamList, 'UserScreen'>;

const UserScreen : FC<UserScreenProps> = ({route}) => {
    const navigation = useNavigation<UserNavigationProp<'UserScreen'>>()
    const isDark = useSelector((state: ColorSchemeState) => state.dark);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Text>Welcome to the User screen!</Text>
      <Button title="Go to User Detail screen" onPress={() => navigation.navigate('UserDetail', { userId: route.params?.userId})} />
      <BottomNavbar display={isDark}/>
    </View>
  );
}

export default UserScreen;
