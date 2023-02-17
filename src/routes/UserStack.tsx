import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserSettingsScreen from 'screens/User/UserSettingsScreen';
import UserDetailScreen from 'screens/User/UserDetailScreen';

const _UserStack= createStackNavigator<RootStack.UserStackParamList>();

export default function UserStack() {
  return (
    <_UserStack.Navigator screenOptions={{headerShown: false}}>
      <_UserStack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'User', headerShown: true }} />
      <_UserStack.Screen name="UserSettings" component={UserSettingsScreen} />
    </_UserStack.Navigator>
  );
}
