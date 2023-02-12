import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';


export type RootStackParamList= {
  Home: undefined;
  Setting: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />

      </RootStack.Navigator>

    </NavigationContainer>
  );
}