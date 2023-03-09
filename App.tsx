import React, { useCallback } from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/stores/slice'

import Main from 'src/Main'
import { customFonts } from 'src/hooks/useLoadAssets'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts(customFonts)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaView>
  )
}
