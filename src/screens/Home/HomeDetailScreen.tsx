// HomeDetailScreen.tsx
import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

type HomeDetailProps = StackScreenProps<RootStack.HomeStackParamList, 'HomeDetail'>;

const HomeDetailScreen: FC<HomeDetailProps> = ({ navigation, route}) =>  {
  return (
    <View>
      <Text>Welcome to the Home Detail screen!</Text>
    </View>
  );
}

export default HomeDetailScreen;
