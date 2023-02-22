import React, {FC} from 'react';
import {MotiView} from 'moti'
import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import styled, {DefaultTheme} from "styled-components/native";

import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";
import {darkTheme, lightTheme} from "styles/Theme";

const BottomNavContainer = styled(MotiView)`
    z-index: 50;
    position: absolute;
    bottom: 0;

    flex-direction: row;
    align-self: center;

    justify-content: center;

    background-color: ${({theme}) => theme.colors.NAVIGATION_BACKGROUND};
    border-radius: 20px;

    padding-top: 25px;
    padding-bottom: 30px;
    width: 100%;
`

const BottomNavButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default function BottomNavbar({display = true}: {display?: boolean}) {
    const isDark = useSelector((state: ColorSchemeState) => state.dark)
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList>>()
    const route = useRoute()
    const iconSize = 30;
    const currentRouteName = route.name
    const defaultIconColor = isDark ? darkTheme.colors.GRAY_LIGHT : lightTheme.colors.GRAY_DARK
    const iconColor = (isFocused: boolean) => (isFocused ? '#40A4FF' : defaultIconColor)

    if(display)
    return (
            <BottomNavContainer
                    from={{translateY: 100, opacity: 0.5}}
                    animate={{translateY: 0, opacity: 1}}
                    exit={{translateY: 100, opacity: 0.2}}
                    transition={{type: 'timing', duration: 500}}
            >
                    <BottomNavButton onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="md-card" size={iconSize} color={iconColor(currentRouteName === "HomeScreen")} />
                    </BottomNavButton>
                    <BottomNavButton onPress={() => navigation.navigate('User', {userId: 'min121234'})}>
                        <FontAwesome5 name="user-circle" size={iconSize} color={iconColor(currentRouteName === "UserScreen")} />
                    </BottomNavButton>
                    <BottomNavButton onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="settings" size={iconSize} color={iconColor(currentRouteName === "ProfileScreen")} />
                    </BottomNavButton>
                    <BottomNavButton onPress={() => navigation.navigate('Menu')}>
                        <Ionicons name="menu" size={iconSize} color={iconColor(currentRouteName === "MenuScreen")} />
                    </BottomNavButton>
            </BottomNavContainer>
    )

    return <BottomNavContainer from={{translateY: 0, opacity: 1}} animate={{translateY: 80, opacity: 0}} exit={{translateY: 0, opacity: 0.2}} />
}
