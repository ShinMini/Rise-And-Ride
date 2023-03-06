import React from 'react';
import {MotiView} from 'moti'
import {useNavigation, useRoute} from "@react-navigation/native";
import styled, {DefaultTheme} from "styled-components/native";

import {Ionicons, FontAwesome5} from '@expo/vector-icons';
import getAnimationProps from "src/utils/getAnimationProps";
import Spacing from "styles/Spacing";
import {darkTheme} from "styles/Theme";

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
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({display = true, animate= false, theme = darkTheme }) => {
	const navigation = useNavigation()
	const {name} = useRoute()

	const {from, to, transition} = getAnimationProps(display, animate, 'down');

	 console.log(`route name: ${name}`)

	const iconColor = (iconName: string) => ( (name === iconName) ? theme.colors.PRIMARY : theme.colors.TITLE )

	return (
					<BottomNavContainer
									from={from}
									animate={to}
									transition={transition}
					>
						<BottomNavButton onPress={() => navigation.navigate('Home')}>
							<Ionicons name="md-card" size={iconSize} color={iconColor("Home")} />
						</BottomNavButton>
						<BottomNavButton onPress={() => navigation.navigate('UserStack', {screen: 'UserScreen', params: {userId: 'min121234'}})}>
							<FontAwesome5 name="user-circle" size={iconSize} color={iconColor("User")} />
						</BottomNavButton>
						<BottomNavButton onPress={() => navigation.navigate('MenuStack', {screens: 'SettingScreen'})}>
							<Ionicons name="settings" size={iconSize} color={iconColor("SettingScreen")} />
						</BottomNavButton>
						{/* <BottomNavButton onPress={() => navigation.navigate('MenuStack')}>
							<Ionicons name="menu" size={iconSize} color={iconColor("Menu")} />
						</BottomNavButton> */}
					</BottomNavContainer>
	)
}

export default BottomNavBar

