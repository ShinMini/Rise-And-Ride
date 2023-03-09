import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {CardStackParamList} from "navType";
import CardScreen from 'src/screens/Card/Card';

const _CardStack= createStackNavigator<CardStackParamList>();

export type CardStackScreenProps<T extends keyof CardStackParamList> = StackScreenProps<CardStackParamList, T>;

export default function MenuStack() {
  return (
    <_CardStack.Navigator screenOptions={{headerShown: false}}>
			<_CardStack.Screen name="Card" component={CardScreen}/>
    </_CardStack.Navigator>
  );
}