import { createSlice} from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from 'styles/Theme';
import { DefaultTheme } from "styled-components/native";

export type ColorSchemeState = {
  dark: boolean;
  theme: DefaultTheme;
}

const initialColorScheme: ColorSchemeState = {
  dark: true,
  theme: darkTheme
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState: initialColorScheme,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !Boolean(state.dark)
      state.theme = state.dark ? darkTheme : lightTheme;
    },
    getColorScheme: (state) => (state)
  }
});

export const { toggleTheme } = colorSchemeSlice.actions;
export const { getColorScheme } = colorSchemeSlice.actions

