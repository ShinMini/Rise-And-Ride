// ProfileDetailScreen.tsx
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type ProfileDetailProps = StackScreenProps<RootStack.ProfileStackParamList, 'ProfileDetail'>;

const ProfileDetailScreen: FC<ProfileDetailProps> = ({ route }) => {
  const username = route.params?.username;

  return (
    <View>
      <Text>Welcome to the Profile Detail Screen!</Text>
      <Text>Username: {username || '_'}</Text>
    </View>
  );
}

export default ProfileDetailScreen;
