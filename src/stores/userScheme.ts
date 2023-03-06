import { PayloadAction, createSlice} from "@reduxjs/toolkit";

// machine learning model 
export type UserStateType= {
  name: string;
  email: string;
  age: number;

  gender?: 'M' | 'F';
  job?: string;
}

const initialUserState: UserStateType= {
  name: '',
  email: '',
  age: 0,

  gender: undefined,
  job: undefined
};

export const userSchemeSlice= createSlice({
  name: "userScheme",
  initialState: initialUserState,
  reducers: {
    setUserState: (state, action: PayloadAction<UserStateType>) => {
      state = action.payload;
    },
    getUserState: (state) => (state),
  }
});