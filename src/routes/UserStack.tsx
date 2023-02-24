import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import UserSettingsScreen from 'screens/User/UserSettingsScreen';
import UserDetailScreen from 'screens/User/UserDetailScreen';
import UserScreen from "screens/User/UserScreen";
import {UserStackParamList} from "../../types";
import NotificationScreen from "screens/Menu/NotificationScreen";

const _UserStack= createStackNavigator<UserStackParamList>();

export type UserStackScreenProps<T extends keyof UserStackParamList> = StackScreenProps<UserStackParamList, T>;

// export type UserNavigationProp<T extends keyof UserStackParamList> = NavigationProp<UserStackParamList, T>;
// export type UserRouteProp<T extends keyof UserStackParamList> = RouteProp<UserStackParamList, T>;

export default function UserStack() {
  return (
    <_UserStack.Navigator screenOptions={{headerShown: false}} initialRouteName="User">
      <_UserStack.Screen name="User" component={UserScreen} options={{ title: 'User', headerShown: false}} />
      <_UserStack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'Detail' }} />
      <_UserStack.Screen name="UserSettings" component={UserSettingsScreen} />
			<_UserStack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification' }} />
    </_UserStack.Navigator>
  );
}