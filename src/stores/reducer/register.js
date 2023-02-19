import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: true,
  name: null,
  email: null,
  phone_number: null,
  store_name: null,
  password: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterRole: (state, payload) => {
      state.role = payload.payload;
    },
    setRegisterName: (state, payload) => {
      state.name = payload.payload;
    },
    setRegisterEmail: (state, payload) => {
      state.email = payload.payload;
    },
    setRegisterPhone: (state, payload) => {
      state.phone_number = payload.payload;
    },
    setRegisterStore: (state, payload) => {
      state.store_name = payload.payload;
    },
    setRegisterPassword: (state, payload) => {
      state.password = payload.payload;
    },
  },
});

export const {
  setRegisterRole,
  setRegisterName,
  setRegisterEmail,
  setRegisterPhone,
  setRegisterStore,
  setRegisterPassword,
} = registerSlice.actions;

export default registerSlice.reducer;
