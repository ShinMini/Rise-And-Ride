import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "screens/Home/HomeScreen";
import UserScreen from "screens/Menu/UserScreen";
import ProfileScreen from "screens/Profile/ProfileScreen";
import SettingScreen from "screens/Menu/SettingScreen";


const RootStack= createStackNavigator<RootStack.RootParamList>();

function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>

        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="User" component={UserScreen} options={{ title: 'Users' }} />
        <RootStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profiles' }} />
        <RootStack.Screen name="Menu" component={SettingScreen} options={{ title: 'Menu' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
