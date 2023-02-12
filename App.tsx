import React from 'react'
import { Text, View, Button} from 'react-native';
import Home from './src/screens/Home'

import { StatusBar } from 'expo-status-bar';
import styled, { DefaultTheme } from 'styled-components/native';
import { lightTheme, darkTheme} from './src/Theme';
import { ThemeProvider } from 'styled-components';
import AppRouter from 'src/AppRouter';

type ThemeStateType = {
  style: 'light' | 'dark';
  theme: DefaultTheme
}

export default function App() {
  const [theme, setTheme] = React.useState<ThemeStateType>({
    style: "light",
    theme: lightTheme
  })

  const toggleTheme = () => {
    if (theme.style === 'light') setTheme({style: 'dark', theme: darkTheme})
    else setTheme({style: 'light', theme: lightTheme})
  }

  return (
    <ThemeProvider theme={theme.theme}>
      <AppRouter />
        <Button title="change color!" onPress={toggleTheme} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};