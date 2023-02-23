import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from 'screens/Menu/SettingScreen';
import {NavigationProp, RouteProp} from "@react-navigation/native";
import AboutScreen from "screens/Menu/AboutScreen";
import UserScreen from "screens/Menu/UserScreen";
import NotificationScreen from "screens/Menu/NotificationScreen";

const _MenuStack = createStackNavigator<RootStack.MenuStackParamList>();

export type MenuNavigationProp<T extends keyof RootStack.MenuStackParamList> = NavigationProp<RootStack.MenuStackParamList, T>;
export type MenuRouteProp<T extends keyof RootStack.MenuStackParamList> = RouteProp<RootStack.MenuStackParamList, T>;

export default function MenuStack() {
  return (
    <_MenuStack.Navigator screenOptions={{headerShown: false}}>
      <_MenuStack.Screen name="NotificationScreen" component={NotificationScreen}/>
      <_MenuStack.Screen name="UserScreen" component={UserScreen}/>
        <_MenuStack.Screen name="SettingScreen" component={SettingScreen}/>
        <_MenuStack.Screen name="AboutScreen" component={AboutScreen}/>
    </_MenuStack.Navigator>
  );
}

