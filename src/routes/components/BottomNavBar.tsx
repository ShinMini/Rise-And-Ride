import React from 'react';
import {MotiView} from 'moti'
import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import styled, {DefaultTheme} from "styled-components/native";

import {Ionicons, FontAwesome5} from '@expo/vector-icons';
import getAnimationProps from "src/utils/getAnimationProps";
import Spacing from "styles/Spacing";
import {darkTheme} from "styles/Theme";
import { CardStackParamList, MenuStackParamList, UserStackParamList } from '../../../types';

const sp = Spacing.navbar.bottom

// styled components
const BottomNavContainer = styled(MotiView)`
	z-index: 50;
	position: absolute;
	bottom: 0;

	flex-direction: row;
	align-self: center;

	justify-content: center;

	background-color: ${({theme}) => theme.colors.NAVIGATION_BACKGROUND};
	border-radius: ${sp.border.radius};

	padding-top: ${sp.padding.top};
	padding-bottom: ${sp.padding.bottom};
	width: ${sp.width};
`

const BottomNavButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

// constants
const iconSize = Spacing.icon.md;

type BottomNavBarProps = {
	display?: boolean
	animate?: boolean
	theme: DefaultTheme
	color?: string
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ display = true, animate = false, theme = darkTheme, color }) => {
	const navigation = useNavigation()
	const cardNav = useNavigation<NavigationProp<CardStackParamList, 'Card'>>()
	const userNav = useNavigation<NavigationProp<UserStackParamList, 'User'>>()
	const menuNav = useNavigation<NavigationProp<MenuStackParamList, 'MenuStack'>>()

	const { name } = useRoute()

	const { from, to, transition } = getAnimationProps(display, animate, 'down');
	console.log(`route name: ${name}`)

	const iColor = color || theme.colors.GREEN
	const iconColor = (iconName: string) => ( (name === iconName) ? iColor : theme.colors.TITLE )

	return (
					<BottomNavContainer
									from={from}
									animate={to}
									transition={transition}
					>
						<BottomNavButton onPress={() => navigation.navigate('Home')}>
							<Ionicons name="home" size={iconSize} color={iconColor("Home")} />
						</BottomNavButton>
						<BottomNavButton onPress={() => cardNav.navigate('CardStack')}>
							<Ionicons name="md-card" size={iconSize} color={iconColor("Card")} />
						</BottomNavButton>
						<BottomNavButton onPress={() => userNav.navigate('UserStack', {screen: 'User', params: {userId: 'min121234'}})}>
							<FontAwesome5 name="user-circle" size={iconSize} color={iconColor("User")} />
						</BottomNavButton>
						<BottomNavButton onPress={() => menuNav.navigate('MenuStack', {screens: 'SettingScreen'})}>
							<Ionicons name="settings" size={iconSize} color={iconColor("SettingScreen")} />
						</BottomNavButton>
					</BottomNavContainer>
	)
}

export default BottomNavBar

