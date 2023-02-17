import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack, ProfileStack, UserStack} from "routes";


const RootStack= createStackNavigator<RootStack.RootParamList>();

function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>

        <RootStack.Screen name="Home" component={HomeStack} />
        <RootStack.Screen name="User" component={UserStack} options={{ title: 'Users' }} />
        <RootStack.Screen name="Profile" component={ProfileStack} options={{ title: 'Profiles' }} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
