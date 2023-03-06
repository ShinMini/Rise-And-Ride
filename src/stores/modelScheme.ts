import { PayloadAction, createSlice} from "@reduxjs/toolkit";

// machine learning model 
export type ModelStateType= {
  model: number;
  runTime: number;
}

const initialModelScheme: ModelStateType= {
  model: 0,
  runTime: 0
};

export const modelSchemeSlice= createSlice({
  name: "modelScheme",
  initialState: initialModelScheme,
  reducers: {
    selectModel: (state, action: PayloadAction<number>) => {
      state.model = action.payload;
    },
    getCurrentModel: (state) => (state),
    runModel: (state) => {
      state.runTime += 1;
    }
  }
});

// const slice = createSlice({
//   name: 'test',
//   initialState: 0,
//   reducers: {
//     increment: (state, action: PayloadAction<number>) => state + action.payload,
//   },
// })
// // now available:
// slice.actions.increment(2)
// // also available:
// slice.caseReducers.increment(0, { type: 'increment', payload: 5 })