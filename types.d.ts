import { RootStackParamList } from 'types';
/** @format */
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace RootStack {
    interface RootParamList extends RootStackParamList {}

    type RootStackParamList = {
      Home: undefined;
      User: {userId?: string};
      Profile: undefined;
    };

    type HomeStackParamList = {
      HomeScreen: undefined;
      HomeDetail: { itemId?: number };
    };

    type UserStackParamList = {
      UserScreen: {userId?: string }
      UserDetail: { userId?: string };
      UserSettings: { showNotifications?: boolean };
    };

    type ProfileStackParamList = {
      ProfileScreen: undefined;
    };
    }
  }


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>

