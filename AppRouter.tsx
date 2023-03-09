import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {CardStack, MenuStack, UserStack} from "routes/index";
import HomeScreen from "screens/Home/HomeScreen";
import NotificationScreen from './src/screens/Menu/NotificationScreen';


const RootStack= createStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} initialRouteName="Home">

        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="CardStack" component={CardStack} />
        <RootStack.Screen name="UserStack" component={UserStack} options={{ title: 'Users' }} />
        <RootStack.Screen name="MenuStack" component={MenuStack} options={{ title: 'Menu' }} />
        <RootStack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;