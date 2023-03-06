import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores/colorScheme";
import React, {FC} from "react";
import {ThemeProvider} from "styled-components/native";
import AppRouter from "../AppRouter";
import {StatusBar} from "expo-status-bar";
import useThemes from "./hooks/useTheme";
import { RootState } from "./stores/slice";

// 1. 로그인 유저 판별
// 2. 로그인 유저가 아니면 로그인 페이지로 이동
// 3. 로그인 유저면 Home Screen 이동

const Main: FC = () => {
    // const state = useSelector((state: RootState) => state.colorScheme);
    const {isDark, theme} = useThemes()

    const statusColor = isDark? 'light' : 'dark';

    return (
            <ThemeProvider theme={theme}>
                <AppRouter />
                <StatusBar style={statusColor} />
            </ThemeProvider>
    )
}

export default Main;
