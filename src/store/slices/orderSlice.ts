import { TCartProduct } from '@/types/product.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IOrder = {
  name: string;
  address: string;
  phone: string;
  country: string;
  city: string;
  status: string;
  note?: string;
  order_date: string;
  order: TCartProduct[]
}

interface OrderState {
  order: IOrder[]
}

const initialState: OrderState = {
  order: []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IOrder>) => {
      state.order.unshift(action.payload);
    },
  },
});

export const { add } = orderSlice.actions;
const order = orderSlice.reducer;
export default order;
