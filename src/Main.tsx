import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";
import {useFonts} from "expo-font";
import React, {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";
import {ThemeProvider} from "styled-components/native";
import AppRouter from "../AppRouter";
import {StatusBar} from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const Main = () => {
    const theme = useSelector((state: ColorSchemeState ) => state.theme);
    const [fontsLoaded] = useFonts({
        'Jua': require('assets/fonts/Jua/Jua-Regular.ttf'),
        'Nunito': require('assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'Nunito-Light': require('assets/fonts/Nunito/static/Nunito-Light.ttf'),
        'Nunito-Bold': require('assets/fonts/Nunito/static/Nunito-Bold.ttf'),
        'Stylish': require('assets/fonts/Stylish/Stylish-Regular.ttf'),
        'Yeon': require('assets/fonts/Yeon_Sung/YeonSung-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
            <ThemeProvider theme={theme}>
                <AppRouter />
                <StatusBar style="auto" />
            </ThemeProvider>
    );
}

export default Main;
