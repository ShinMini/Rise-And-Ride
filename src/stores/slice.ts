import { configureStore } from "@reduxjs/toolkit";
import { colorSchemeSlice} from "./colorScheme";
import { modelSchemeSlice } from "./modelScheme";
import { userSchemeSlice } from "./userScheme";

const store = configureStore({
  reducer: {
    colorScheme: colorSchemeSlice.reducer,
    modelScheme: modelSchemeSlice.reducer,
    userScheme: userSchemeSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export {store}


