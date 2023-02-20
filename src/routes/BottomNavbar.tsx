import React from 'react';
import {NavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import styled from "styled-components/native";

import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons';

const BottomNavContainer = styled.View`
    position: absolute;
    bottom: 25px;

    flex-direction: row;
    align-self: center;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.PRIMARY};

    border-radius: 20px;

    padding: 20px 30px;
    width: 90%;
`

const BottomNavButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default function BottomNavbar() {
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList>>()
    const route = useRoute()
    console.log(`route name : ${route.name}`)
    const iconSize = 30;
    const currentRouteName = route.name
    const iconColor = (isFocused: boolean) => (isFocused ? 'white' : 'black')

    return (
            <BottomNavContainer>
                    <BottomNavButton onPress={() => navigation.navigate('Home')}>
                        <Entypo name="home" size={iconSize} color={iconColor(currentRouteName === "HomeScreen")} />
                    </BottomNavButton>
                    <BottomNavButton onPress={() => navigation.navigate('User', {userId: 'min121234'})}>
                            <FontAwesome5 name="user-circle" size={iconSize} color={iconColor(currentRouteName === "UserScreen")} />
                    </BottomNavButton>
                    <BottomNavButton onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="settings" size={iconSize} color={iconColor(currentRouteName === "ProfileScreen")} />
                    </BottomNavButton>
            </BottomNavContainer>
    )
}
