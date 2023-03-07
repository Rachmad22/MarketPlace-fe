import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  address: 0,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckout: (state, action) => {
      state.data = action.payload.data;
    },
    setCheckoutAddress: (state, action) => {
      state.address = action.payload.address;
    },
  },
});

export const { setCheckout, setCheckoutAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
