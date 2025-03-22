'use client'

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Product from "./Product";


function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <>
      <Product cart={cart} />
    </>
  )
}

export default Cart;