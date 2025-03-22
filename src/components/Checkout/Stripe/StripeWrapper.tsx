'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from '@/components/Checkout/Card';
import { TOrderProduct } from '@/types/product.types';
import convertToSubcurrency from '@/lib/convertToSubcurrency';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface IProps {
  next: () => void;
  prev: () => void;
  total: number;
  form: TOrderProduct | undefined
}

const StripeWrapper = (props: IProps) => {
  const { next, prev, total, form } = props;
  return (
    <Elements stripe={stripePromise} options={{
      mode: "payment",
      amount: convertToSubcurrency(total),
      currency: "usd",
      paymentMethodTypes: ['card'],
    }}>
      <CardForm next={next} prev={prev} total={total} form={form} />
    </Elements>
  )
};

export default StripeWrapper;
