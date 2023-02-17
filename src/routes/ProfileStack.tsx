import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileDetailScreen from 'screens/Profile/ProfileDetailScreen';
import ProfileSettingsScreen from 'screens/Profile/ProfileSettingsScreen';

const _ProfileStack= createStackNavigator<RootStack.ProfileStackParamList>();


export default function ProfileStack() {
  return (
    <_ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <_ProfileStack.Screen name="ProfileDetail" component={ProfileDetailScreen}options={{ title: 'Profile', headerShown: true }}  />
      <_ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    </_ProfileStack.Navigator>
  );
}


