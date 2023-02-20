import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home/HomeScreen';
import HomeDetailScreen from 'screens/Home/HomeDetailScreen';
import {NavigationProp, RouteProp} from "@react-navigation/native";

const _HomeStack = createStackNavigator<RootStack.HomeStackParamList>();

export type HomeNavigationProp<T extends keyof RootStack.HomeStackParamList> = NavigationProp<RootStack.HomeStackParamList, T>;
export type HomeRouteProp<T extends keyof RootStack.HomeStackParamList> = RouteProp<RootStack.HomeStackParamList, T>;

export default function HomeStack() {
  return (
    <_HomeStack.Navigator screenOptions={{headerShown: false}}>
      <_HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerShown: true }} />
      <_HomeStack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </_HomeStack.Navigator>
  );
}

