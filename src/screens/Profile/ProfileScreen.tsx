// ProfileScreen.tsx
import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackScreenProps } from 'types';

type ProfileScreenNavigationProp = RootStackScreenProps<'Profile'>;
type ProfileScreenProp = StackScreenProps<RootStack.ProfileStackParamList, 'ProfileScreen'>;

const ProfileScreen: FC<ProfileScreenNavigationProp> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Profile screen!</Text>
      <Button title="Go to Profile Detail screen" onPress={() => navigation.navigate('ProfileDetail', {username: 'hyeon min'})} />
    </View>
  );
}

export default ProfileScreen;
