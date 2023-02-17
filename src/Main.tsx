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
        'Inter-Black': require('assets/fonts/Inter-Black.otf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    });

    return (
            <ThemeProvider theme={theme}>
                <AppRouter />
                <StatusBar style="auto" />
            </ThemeProvider>
    );
}

export default Main;
