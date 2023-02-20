import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";
import React, {FC} from "react";
import {ThemeProvider} from "styled-components/native";
import AppRouter from "../AppRouter";
import {StatusBar} from "expo-status-bar";

const Main: FC = () => {
    const theme = useSelector((state: ColorSchemeState ) => state.theme);
    return (
            <ThemeProvider theme={theme}>
                <AppRouter />
                <StatusBar style="auto" />
            </ThemeProvider>
    )
}

export default Main;
