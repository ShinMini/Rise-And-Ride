import React, { FC } from 'react';
import { View, Text } from 'react-native';
import {UserStackScreenProps} from "routes/UserStack";

const UserDetailScreen: FC<UserStackScreenProps<'UserDetail'>> = ({ route }) => {
  const userId = route.params?.userId;

  return (
    <View>
      <Text>Welcome to the User Detail screen for user ID {userId || '_'}!</Text>
    </View>
  );
}

export default UserDetailScreen;