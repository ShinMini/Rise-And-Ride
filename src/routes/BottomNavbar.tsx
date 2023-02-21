import React, {FC} from 'react';
import {MotiView} from 'moti'
import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import styled from "styled-components/native";

import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons';

const BottomNavContainer = styled(MotiView)`
    z-index: 50;
    position: absolute;
    bottom: 22px;

    flex-direction: row;
    align-self: center;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.POINT};
    border-radius: 20px;

    height: 70px;
    width: 80%;
`

const BottomNavButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default function BottomNavbar({display = true}: {display: boolean}) {
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList>>()
    const route = useRoute()
    const iconSize = 30;
    const currentRouteName = route.name
    const iconColor = (isFocused: boolean) => (isFocused ? 'white' : 'black')

    if(display)
    return (
            <BottomNavContainer
                    from={{translateY: -100}}
                    animate={{translateY: 0}}
                    exit={{translateY: -100}}
                    transition={{type: 'timing', duration: 500}}
            >
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

    return <BottomNavContainer from={{translateY: 0}} animate={{translateY: 80}} exit={{translateY: 0}} />
}
