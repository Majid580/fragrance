import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((x) => x.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((x) => x.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((x) => x.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((x) => x.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((x) => x.id !== action.payload.id);
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
