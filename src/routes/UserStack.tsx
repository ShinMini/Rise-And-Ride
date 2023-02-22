import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserSettingsScreen from 'screens/User/UserSettingsScreen';
import UserDetailScreen from 'screens/User/UserDetailScreen';
import {NavigationProp, RouteProp} from "@react-navigation/native";
import UserScreen from "screens/User/UserScreen";

const _UserStack= createStackNavigator<RootStack.UserStackParamList>();

export type UserNavigationProp<T extends keyof RootStack.UserStackParamList> = NavigationProp<RootStack.UserStackParamList, T>;
export type UserRouteProp<T extends keyof RootStack.UserStackParamList> = RouteProp<RootStack.UserStackParamList, T>;

export default function UserStack() {
  return (
    <_UserStack.Navigator screenOptions={{headerShown: false}}>
      <_UserStack.Screen name="UserScreen" component={UserScreen} options={{ title: 'User', headerShown: false}} />
      <_UserStack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'Detail' }} />
      <_UserStack.Screen name="UserSettings" component={UserSettingsScreen} />
    </_UserStack.Navigator>
  );
}
