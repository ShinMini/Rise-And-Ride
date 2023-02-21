import React, {FC} from "react";
import styled from "styled-components/native";
import {Bold} from "styles/Typo";
import {MotiView} from "moti";
import {transform} from "@babel/core";

const Header = styled(MotiView)`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100px;

    background-color: ${({theme}) => theme.colors.POINT};

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const HeaderText = styled(Bold)`
    padding-top: 60px;
    padding-bottom: 10px;
    color: ${({theme}) => theme.colors.TEXT};

    border-bottom-color: ${({theme}) => theme.colors.GRAY_LIGHT};
    border-bottom-width: 3px;

    font-size: 25px;
`
const HomeHeaderContent: FC<{display: boolean}> = ({display = true}) => {
    if(display)
    return (
            <Header
                    from={{translateY: -100}}
                    animate={{translateY: 0}}
                    exit={{translateY: -100}}
                    transition={{type: 'timing', duration: 500}}
            >
                <HeaderText align="center">
                    Modu Card
                </HeaderText>
            </Header>
    )

    return <Header from={{translateY: 0}} animate={{translateY: -80}} exit={{translateY: 0}} />
}

export default HomeHeaderContent
