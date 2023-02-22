import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "screens/Profile/ProfileScreen";
import {NavigationProp, RouteProp} from "@react-navigation/native";

const _ProfileStack= createStackNavigator<RootStack.ProfileStackParamList>();

export type ProfileNavigationProp<T extends keyof RootStack.ProfileStackParamList> = NavigationProp<RootStack.ProfileStackParamList, T>;
export type ProfileRouteProp<T extends keyof RootStack.ProfileStackParamList> = RouteProp<RootStack.ProfileStackParamList, T>;

export default function ProfileStack() {
  return (
    <_ProfileStack.Navigator screenOptions={{headerShown: false}} initialRouteName={"ProfileScreen"}>
        <_ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile', headerShown: false }}  />
    </_ProfileStack.Navigator>
  );
}


