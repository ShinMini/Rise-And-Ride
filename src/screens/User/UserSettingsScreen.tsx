// UserSettingsScreen.tsx
import React from 'react';
import {Text, View} from 'react-native';
import {UserStackScreenProps} from "routes/UserStack";

const UserSettingsScreen: React.FC<UserStackScreenProps<'UserSettings'>> = ({route}) => {
  const {showNotifications} = route.params;

  return (
          <View>
            <Text>Welcome to the User Settings Screen!</Text>
            <Text>Show Notifications: {showNotifications ? 'Yes' : 'No'}</Text>
          </View>
  );
}

export default UserSettingsScreen