import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {MenuStack, UserStack} from "routes";
import HomeScreen from "screens/Home/HomeScreen";


const RootStack= createStackNavigator<RootStack.RootParamList>();

function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} initialRouteName="Home">

        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="UserStack" component={UserStack} options={{ title: 'Users' }} />
        <RootStack.Screen name="MenuStack" component={MenuStack} options={{ title: 'Menu' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
