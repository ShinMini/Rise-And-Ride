import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileDetailScreen from 'screens/Profile/ProfileDetailScreen';
import ProfileSettingsScreen from 'screens/Profile/ProfileSettingsScreen';
import ProfileScreen from "screens/Profile/ProfileScreen";
import {NavigationProp, RouteProp} from "@react-navigation/native";

const _ProfileStack= createStackNavigator<RootStack.ProfileStackParamList>();

export type ProfileNavigationProp<T extends keyof RootStack.ProfileStackParamList> = NavigationProp<RootStack.ProfileStackParamList, T>;
export type ProfileRouteProp<T extends keyof RootStack.ProfileStackParamList> = RouteProp<RootStack.ProfileStackParamList, T>;

export default function ProfileStack() {
  return (
    <_ProfileStack.Navigator screenOptions={{headerShown: false}} initialRouteName={"ProfileScreen"}>
        <_ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile', headerShown: true }}  />

      <_ProfileStack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: 'Detail', headerShown: true }}  />
      <_ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    </_ProfileStack.Navigator>
  );
}


