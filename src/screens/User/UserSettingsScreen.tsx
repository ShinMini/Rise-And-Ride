// UserSettingsScreen.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type UserSettingsProps = StackScreenProps<RootStack.UserStackParamList, 'UserSettings'>;

export default function UserSettingsScreen({ route }: UserSettingsProps) {
  const { showNotifications } = route.params;

  return (
    <View>
      <Text>Welcome to the User Settings Screen!</Text>
      <Text>Show Notifications: {showNotifications ? 'Yes' : 'No'}</Text>
    </View>
  );
}
