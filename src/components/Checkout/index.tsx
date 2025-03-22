import { Dispatch, SetStateAction } from "react";
import CheckOutForm from "./CheckOutForm";
import { TOrderProduct } from "@/types/product.types";

interface IProps {
  next: () => void
  setForm: Dispatch<SetStateAction<TOrderProduct | undefined>>
  form: TOrderProduct | undefined,
  setTotal: Dispatch<SetStateAction<number>>
}

function CheckOut(props: IProps) {
  const { next, setForm, form, setTotal } = props
  return (
    <>
      <CheckOutForm next={next} setForm={setForm} form={form} setTotal={setTotal} />
    </>
  )
}

export default CheckOut