/** @format */
import { RootStackParamList } from 'types';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

type NestedStackScreens = keyof UserStackParamList | keyof MenuStackParamList;

type NavigateType<RouteName, NestedStackParamList> = <RouteName extends keyof NestedStackParamList> (
		...args:
			RouteName extends unknown
				?
				undefined extends NestedStackParamList[RouteName]
					?
					| [screen: RouteName]
					| [screen: RouteName, params: ParamList[RouteName]]
					: [screen: RouteName, params: ParamList[RouteName]]
				: never
	) => void;

export type RootStackParamList = {
	Home: undefined;
	UserStack: NavigateType
	MenuStack: NavigateType
};

export type UserStackParamList = {
	UserScreen: {userId?: string}
	UserDetail: { userId?: string };
	UserSettings: { showNotifications?: boolean };
	Notification: undefined
};

export type MenuStackParamList = {
	NotificationScreen: undefined
	UserScreen: {userId?: string}
	SettingScreen: undefined;
	AboutScreen: undefined;
}

/** 전체 네비게이션 타입입니다.
 * @description - Generic 사용시: 원하는 중첩된 스크린의 {routes, route} params 타입을 얻습니다. Generic 을 사용하지 않을 경우, 모든 {routes, route} params 타입을 얻습니다.
 * @example - RootStackScreenProps<'Home'> => {routes: HomeScreenNavigationProp, route: HomeScreenRouteProp}
 * @example - RootStackScreenProps => {routes: RootStackNavigationProp, route: RootStackRouteProp}
 *
 * @return {NavigationProp} - navigaiton prop
 * @return {RouteProp} - route prop
 * */
export type RootStackScreenProps<
	Screen extends keyof RootStackParmList = keyof RootStackPramList,
> = NativeStackScreenProps<RootStackParamList, Screen>;
