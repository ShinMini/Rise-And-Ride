import { RootStackParamList } from 'types';
/** @format */
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace RootStack {
    interface RootParamList extends RootStackParamList {}

    type RootStackParamList = {
      Home: undefined;
      UserStack: {userId?: string};
      MenuStack: undefined;
    };
    //
    // type HomeStackParamList = {
    //   HomeScreen: undefined;
    //   HomeDetail: { cardId?: number };
    // };

    type UserStackParamList = {
      UserScreen: {userId?: string}
      UserDetail: { userId?: string };
      UserSettings: { showNotifications?: boolean };
    };

    type MenuStackParamList = {
      NotificationScreen: undefined
      UserScreen: {userId?: string}
      SettingScreen: undefined;
      AboutScreen: undefined;
    }
  }
}


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>

