import React, {useCallback} from 'react'
import {Provider} from 'react-redux';
import {store} from 'stores';

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Main from "src/Main";
import {customFonts} from "src/hooks/useLoadAssets";

export default function App() {
    const [fontsLoaded] = useFonts(customFonts);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
};
