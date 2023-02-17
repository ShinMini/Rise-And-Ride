// UserScreen.tsx
import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import {StackScreenProps } from '@react-navigation/stack';

type UserScreenProps = StackScreenProps<RootStack.UserStackParamList, 'UserScreen'>;

const UserScreen : FC<UserScreenProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>Welcome to the User screen!</Text>
      <Button title="Go to User Detail screen" onPress={() => navigation.navigate('UserDetail', { userId: route.params?.userId})} />
    </View>
  );
}

export default UserScreen;
