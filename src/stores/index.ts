import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from 'styles/Theme';
import { DefaultTheme } from "styled-components/native";

export type ColorSchemeState = {
  dark: boolean;
  theme: DefaultTheme;
}

const initialColorScheme: ColorSchemeState = {
  dark: false,
  theme: lightTheme
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState: initialColorScheme,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !Boolean(state.dark)
      state.theme = state.dark ? darkTheme : lightTheme;
    }
  }
});

export const { toggleTheme } = colorSchemeSlice.actions;

export const selectDark = (state: ColorSchemeState) => state.dark;
export const selectTheme = (state: ColorSchemeState) => state.theme;

export const store = configureStore({
  reducer: colorSchemeSlice.reducer
});
