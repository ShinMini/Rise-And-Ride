import React from 'react'
import AppRouter from './AppRouter';
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native';
import {Provider, useSelector} from 'react-redux';
import {ColorSchemeState, store} from 'stores';

export default function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
};

const Main = () => {
    const theme = useSelector((state: ColorSchemeState ) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
