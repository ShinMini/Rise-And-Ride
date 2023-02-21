import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from 'screens/Menu/MenuScreen';
import {NavigationProp, RouteProp} from "@react-navigation/native";

const _MenuStack = createStackNavigator<RootStack.MenuStackParamList>();

export type MenuNavigationProp<T extends keyof RootStack.MenuStackParamList> = NavigationProp<RootStack.MenuStackParamList, T>;
export type MenuRouteProp<T extends keyof RootStack.MenuStackParamList> = RouteProp<RootStack.MenuStackParamList, T>;

export default function MenuStack() {
  return (
    <_MenuStack.Navigator screenOptions={{headerShown: false}}>
      <_MenuStack.Screen name="MenuScreen" component={MenuScreen}/>
    </_MenuStack.Navigator>
  );
}

