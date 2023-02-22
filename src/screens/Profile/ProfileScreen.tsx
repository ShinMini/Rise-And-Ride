// ProfileScreen.tsx
import React, { FC, useState } from 'react';
import {Switch, Text, View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {useDispatch, useSelector} from "react-redux";
import {ColorSchemeState, toggleTheme} from "stores";
import {SText} from "components";
import styled from "styled-components/native";
import BottomNavbar from "routes/components/BottomNavbar";

type ProfileScreenProps = StackScreenProps<RootStack.ProfileStackParamList, 'ProfileScreen'>;

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.BACKGROUND};

    align-content: center;
    justify-content: center;
`

const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
    const isDark = useSelector((state: ColorSchemeState) => state.dark);
    const [nowTheme, setNowTheme] = useState(isDark);
    const toggleButton = () => dispatch(toggleTheme());

    React.useEffect(() => {
        if(nowTheme !== isDark) toggleButton();
    }, [nowTheme])

    const dispatch = useDispatch();
    const toggleColorScheme = () => setNowTheme((prevState) => !prevState);

    return (
            <Container>
                <SText size={16} >Welcome to the Profile Settings Screen!</SText>
                <SText> switch Theme {' '}
                    <Switch value={nowTheme} onValueChange={toggleColorScheme} />
                </SText>
                <BottomNavbar display={true}/>
            </Container>
    );
}

export default ProfileScreen;
