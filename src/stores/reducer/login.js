import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginEmail: (state, payload) => {
      state.email = payload.payload;
    },
    setLoginPassword: (state, payload) => {
      state.password = payload.payload;
    },
  },
});

export const { setLoginEmail, setLoginPassword } = loginSlice.actions;

export default loginSlice.reducer;
