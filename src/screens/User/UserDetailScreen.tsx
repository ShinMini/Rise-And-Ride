import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type UserDetailProps = StackScreenProps<RootStack.UserStackParamList, 'UserDetail'>;

const UserDetailScreen: FC<UserDetailProps> = ({ route }) => {
  const userId = route.params?.userId;

  return (
    <View>
      <Text>Welcome to the User Detail screen for user ID {userId || '_'}!</Text>
    </View>
  );
}

export default UserDetailScreen;
