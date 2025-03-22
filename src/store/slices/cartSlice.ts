import { TCartProduct } from "@/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: TCartProduct[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TCartProduct>) => {
      const foundIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) {
        state.cart[foundIndex].quantity += action.payload.quantity;
        let total = state.cart[foundIndex].price;
        if (state.cart[foundIndex].off) {
          total = total - (total * state.cart[foundIndex].off) / 100;
        }
        state.cart[foundIndex].total = state.cart[foundIndex].quantity * total;
        return;
      }
      state.cart.unshift(action.payload);
    },
    increment: (state, payload: PayloadAction<number>) => {
      const foundIndex = state.cart.findIndex(
        (item) => item.id === payload.payload
      );
      if (foundIndex !== -1) {
        state.cart[foundIndex].quantity += 1;
        let total = state.cart[foundIndex].price;
        if (state.cart[foundIndex].off) {
          total = total - (total * state.cart[foundIndex].off) / 100;
        }
        state.cart[foundIndex].total = state.cart[foundIndex].quantity * total;
      }
    },
    decrement: (state, payload: PayloadAction<number>) => {
      const foundIndex = state.cart.findIndex(
        (item) => item.id === payload.payload
      );
      if (foundIndex !== -1 && state.cart[foundIndex].quantity > 1) {
        state.cart[foundIndex].quantity -= 1;
        let total = state.cart[foundIndex].price;
        if (state.cart[foundIndex].off) {
          total = total - (total * state.cart[foundIndex].off) / 100;
        }
        state.cart[foundIndex].total = state.cart[foundIndex].quantity * total;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const foundIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        state.cart.splice(foundIndex, 1);
      }
    },
    clear: (state) => {
      state.cart = [];
    },
  },
});

export const { add, decrement, remove, increment, clear } = cartSlice.actions;
const cart = cartSlice.reducer;
export default cart;
