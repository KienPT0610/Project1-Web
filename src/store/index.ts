import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cart from "./slices/cartSlice";
import order from "./slices/orderSlice";
import authReducer from "./slices/authSlices";
import products from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cart: cart,
    order: order,
    products: products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
