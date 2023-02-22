import React, {FC} from "react";
import styled from "styled-components/native";
import {Bold} from "styles/Typo";
import {MotiView} from "moti";

const Header = styled(MotiView)`
    position: absolute;
    z-index: 50;
    top: 0;

    width: 100%;
    height: 90px;

    background-color: ${({theme}) => theme.colors.MAIN};

    border-bottom-color: ${({theme}) => theme.colors.OPACITY_BORDER};
    border-bottom-width: 3px;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
`

const HeaderText = styled(Bold)`
    padding-top: 60px;
    padding-bottom: 5px;
    color: ${({theme}) => theme.colors.BACKGROUND};

    border-bottom-color: ${({theme}) => theme.colors.GRAY_LIGHT};
    border-bottom-width: 3px;

    font-size: 22px;
`

type HeaderNavBarProps = {
    display?: boolean
    headerTitle?: string
    canGoBack?: boolean
}

const HeaderNavBar: FC<HeaderNavBarProps> = ({display = true, headerTitle = '', canGoBack = false}) => {
    if(canGoBack) console.log('canGoBack: ', canGoBack)
    if(display)
    return (
            <Header
                    from={{translateY: -100, opacity: 0.5}}
                    animate={{translateY: 0, opacity: 1}}
                    exit={{translateY: -100, opacity: 0.2}}
                    transition={{type: 'timing', duration: 500}}
            >
                <HeaderText align="center" fontFamily={"Roboto"}>
                    {headerTitle}
                </HeaderText>
            </Header>
    )

    return <Header from={{translateY: 0, opacity: 1}} animate={{translateY: -80, opacity: 0}} exit={{translateY: 0, opacity: 1}} />
}

export default HeaderNavBar
