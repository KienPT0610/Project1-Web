import { TOrderProduct } from "@/types/product.types";
import StripeWrapper from "./StripeWrapper";

interface IProps {
  next: () => void;
  prev: () => void;
  total: number;
  form: TOrderProduct | undefined
}

function StripeCheckOut(props: IProps) {
  const { next, prev, total, form } = props;
  return (
    <div>
      <StripeWrapper next={next} prev={prev} total={total} form={form} />
    </div>
  );
}

export default StripeCheckOut;