// SettingScreen.tsx
import React, { FC, useState } from 'react';
import {Switch} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {useDispatch, useSelector} from "react-redux";
import {ColorSchemeState, toggleTheme} from "stores";
import {SText} from "components";
import styled from "styled-components/native";
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import HeaderNavBar from "routes/components/HeaderNavBar";
import Spacing from "styles/Spacing";

type SettingScreenProps = StackScreenProps<RootStack.MenuStackParamList, 'SettingScreen'>;

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.BACKGROUND};

    justify-items: center;
`
const SettingOptionBox = styled.TouchableOpacity`
    width: 80%;
    height: ${Spacing.box.sm}px;

    margin-left: 10%;

    background-color: ${({theme}) => theme.colors.PRIMARY};

    justify-content: center;
`;

const SettingScreen: FC<SettingScreenProps> = ({ navigation }) => {
    const {isDark, toggleButton, theme} = useThemes();
    const toggleColorScheme = () => { toggleButton(); return }

    return (
            <Container>
                <HeaderNavBar title="Setting" canGoBack theme={theme}/>
                <SettingOptionBox>
                    <SText> switch Theme </SText>
                </SettingOptionBox>

                <SText size={Spacing.icon.md} >Welcome to the Setting Screen!</SText>
                <Switch value={isDark} onValueChange={toggleColorScheme} style={{alignSelf: 'center'}}/>
                <BottomNavBar display theme={theme} />
            </Container>
    );
}

export default SettingScreen;
