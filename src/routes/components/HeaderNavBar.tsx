import React, {FC} from "react";
import styled, {DefaultTheme} from "styled-components/native";
import {DigitExtraBold, ExtraBold} from "styles/Typo";
import {MotiView} from "moti";
import { Ionicons } from '@expo/vector-icons';
import {darkTheme} from "styles/Theme";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import getAnimationProps from "src/utils/getAnimationProps";
import Spacing from "styles/Spacing";
import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

const sp = Spacing.navbar.header

const Header = styled(MotiView)`
    position: absolute;
    z-index: 50;
    top: 0;

    width: 100%;
    height: ${sp.height}px;

    background-color: ${({theme}) => theme.colors.NAVIGATION_BACKGROUND};

    border-bottom-color: ${({theme}) => theme.colors.OPACITY_BORDER};
    border-bottom-width: ${sp.border.bottom}px;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
`

const HeaderDefaultComponent = styled.View`
    padding: ${`${sp.padding.top}px ${sp.padding.right}px ${sp.padding.bottom} ${sp.padding.left}px`};

    flex-direction: row;
    justify-content: space-between;
`

const HeaderText = styled(ExtraBold)`
    color: ${({theme}) => theme.colors.PRIMARY};
    font-size: ${Spacing.font.lg}px;
`

const HeaderNavButton = styled.TouchableOpacity<{bottom?: number}>`
    bottom: ${({bottom}) => bottom ? bottom : 0}px;
`

// expanded header components
const HeaderExpandedComponent = styled(MotiView)`
    margin-top: 10px;
    justify-items: flex-end;
    opacity: 0
`
const HeaderExpandedButton = styled.TouchableOpacity<{borderTop?: boolean}>`
    padding: 10px;

    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    border-top-color: ${({theme}) => theme.colors.BACKGROUND_OPPOSITE};
    border-top-width: ${({borderTop}) => borderTop ? 1 : 0}px;

    border-bottom-color: ${({theme}) => theme.colors.BACKGROUND_OPPOSITE};
    border-bottom-width: 1px;
`
const HeaderExpandedIcon = styled(Ionicons)`
    font-size: ${Spacing.icon.sm}px;
    margin: 0 15px;
`
const HeaderExpandedTitle = styled(DigitExtraBold)`
    color: ${({theme}) => theme.colors.BACKGROUND_OPPOSITE};
    font-size: ${Spacing.font.md}px;

    padding-bottom: 5px;
`


// constants
const iconSize = Spacing.icon.md

// ================ TYPE =================
type HeaderNavBarProps = {
    display?: boolean
    title?: string
    canGoBack?: boolean
    animate?: boolean
    theme: DefaultTheme
}

const HeaderNavBar: FC<HeaderNavBarProps> = ({display = true, title = '', canGoBack = false, animate = false, theme = darkTheme}) => {
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList>>()
    const expandedColor = theme.colors.GRAY_LIGHT
    const [expanded, setExpanded] = React.useState(false)
    const {from, to, transition} = getAnimationProps(display, animate, 'up');

    const headerHeight = useSharedValue(sp.height)
    const headerExpandedOpacity = useSharedValue(0)

    const onPressMenuIcon = () => {
        const height = !expanded ? sp.animated.height : sp.height
        const opacity = !expanded ? 1 : 0
        headerHeight.value = withTiming(height, {duration: 300})
        headerExpandedOpacity.value = withTiming(opacity, {duration: 350})
        setExpanded(!expanded)
    }

    type onPressExpandedIconParams = {
        goto: keyof Omit<RootStack.RootStackParamList, 'User'>
    } | {
        goto: 'User'
        params: {userId?: string}
    }
    const onPressExpandedIcon = (props: onPressExpandedIconParams) => {
        if(props.goto === 'User')
            navigation.navigate(props.goto, props.params)

        navigation.navigate(props.goto as keyof Omit<RootStack.RootStackParamList, 'User'>)
        onPressMenuIcon()
    }

    React.useEffect(() => {
        if (!display) {
            expanded && onPressMenuIcon()
        }
    }, [display])

    // header navbar animation
    const animHeaderStyle = useAnimatedStyle(() => ( { height: headerHeight.value } ))
    const animHeaderExpandedStyle = useAnimatedStyle(() => ( { opacity: headerExpandedOpacity.value } ))

    return (
            <Header
                    from={from}
                    animate={to}
                    transition={transition}
                    style={animHeaderStyle}
            >
                <HeaderDefaultComponent>

                {canGoBack ?
                        (
                            <HeaderNavButton onPress={() => navigation.goBack()} bottom={3}>
                                <Ionicons name="chevron-back-outline" size={iconSize + 2} color={theme.colors.ICON} />
                            </HeaderNavButton>
                        )
                        :
                        (
                            <HeaderNavButton onPress={() => navigation.navigate('Menu')} bottom={4}>
                                <Ionicons name="notifications-outline" size={iconSize} color={theme.colors.POINT} />
                            </HeaderNavButton>
                        )
                }
                <HeaderText align="center" fontFamily={"DigitExtraBold"}>
                    {title}
                </HeaderText>
                <HeaderNavButton onPress={onPressMenuIcon} bottom={3} >
                    <Ionicons name="ios-menu" size={iconSize + 2} color={theme.colors.TITLE} />
                </HeaderNavButton>
                </HeaderDefaultComponent>

                {/* expanded header components */}
                <HeaderExpandedComponent style={animHeaderExpandedStyle}>
                    <HeaderExpandedButton onPress={() => onPressExpandedIcon({goto: 'User', params: {userId: 'Hyeon Min Shin'}})} borderTop >
                        <HeaderExpandedTitle >
                            My Page
                        </HeaderExpandedTitle>
                        <HeaderExpandedIcon name="person-outline" color={expandedColor} />
                    </HeaderExpandedButton>

                    <HeaderExpandedButton onPress={() => onPressExpandedIcon({goto: 'Menu'})}>
                        <HeaderExpandedTitle >
                            Settings
                        </HeaderExpandedTitle>
                        <HeaderExpandedIcon name="settings-outline" color={expandedColor} />
                    </HeaderExpandedButton>

                    <HeaderExpandedButton onPress={() => onPressExpandedIcon({goto: 'Home'})}>
                        <HeaderExpandedTitle >
                            About
                        </HeaderExpandedTitle>
                        <HeaderExpandedIcon name="information-circle-outline" color={expandedColor} />
                    </HeaderExpandedButton>

                </HeaderExpandedComponent>


            </Header>
    )
}

export default HeaderNavBar
