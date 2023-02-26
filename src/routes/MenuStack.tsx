import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import SettingScreen from 'screens/Menu/SettingScreen';
import AboutScreen from "screens/Menu/AboutScreen";
import UserScreen from "screens/User/UserScreen";
import {MenuStackParamList} from "navType";

const _MenuStack = createStackNavigator<MenuStackParamList>();

export type MenuStackScreenProps<T extends keyof MenuStackParamList> = StackScreenProps<MenuStackParamList, T>;

export default function MenuStack() {
  return (
    <_MenuStack.Navigator screenOptions={{headerShown: false}}>
			<_MenuStack.Screen name="SettingScreen" component={SettingScreen}/>
			<_MenuStack.Screen name="AboutScreen" component={AboutScreen}/>
    </_MenuStack.Navigator>
  );
}