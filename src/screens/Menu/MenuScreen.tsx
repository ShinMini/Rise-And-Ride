// MenuScreen.tsx
import React, { FC, useState } from 'react';
import {Switch} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {useDispatch, useSelector} from "react-redux";
import {ColorSchemeState, toggleTheme} from "stores";
import {SText} from "components";
import styled from "styled-components/native";
import BottomNavbar from "routes/components/BottomNavbar";

type MenuScreenProps = StackScreenProps<RootStack.MenuStackParamList, 'MenuScreen'>;

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.BACKGROUND};

    align-content: center;
    justify-content: center;
`

const MenuScreen: FC<MenuScreenProps> = ({ navigation }) => {
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
                <SText size={16} >Welcome to the Menu Settings Screen!</SText>
                <SText> switch Theme {' '}
                    <Switch value={nowTheme} onValueChange={toggleColorScheme} />
                </SText>
                <BottomNavbar display={isDark}/>
            </Container>
    );
}

export default MenuScreen;
