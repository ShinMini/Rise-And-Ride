// ProfileScreen.tsx
import React, { FC} from 'react';
import {Switch} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {SText} from "components";
import styled from "styled-components/native";
import BottomNavBar from "routes/components/BottomNavBar";
import HeaderNavBar from "routes/components/HeaderNavBar";
import useThemes from "src/hooks/useTheme";

type ProfileScreenProps = StackScreenProps<RootStack.RootStackParamList, 'Profile'>;

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.BACKGROUND};

    align-content: center;
    justify-content: center;
`

const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
    const {isDark, toggleButton, theme} = useThemes();
    const toggleColorScheme = () => { toggleButton(); return }

    return (
            <Container>
                <HeaderNavBar title="Setting" display canGoBack theme={theme} />
                <SText size={16} >Welcome to the Profile Settings Screen!</SText>
                <SText> switch Theme</SText>
                <Switch value={isDark} onValueChange={toggleColorScheme} style={{alignSelf: 'center'}}/>
                <BottomNavBar display theme={theme} />
            </Container>
    );
}

export default ProfileScreen;
