import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home/HomeScreen';
import HomeDetailScreen from 'screens/Home/HomeDetailScreen';

const _HomeStack = createStackNavigator<RootStack.HomeStackParamList>();

export default function HomeStack() {
  return (
    <_HomeStack.Navigator screenOptions={{headerShown: false}}>
      <_HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerShown: true }} />
      <_HomeStack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </_HomeStack.Navigator>
  );
}

