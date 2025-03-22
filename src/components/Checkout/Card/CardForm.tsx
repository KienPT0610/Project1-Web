'use client';

import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button, Card } from 'antd';
import { TOrderProduct } from '@/types/product.types';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { add } from '@/store/slices/orderSlice';
import { clear } from '@/store/slices/cartSlice';
import { useCard } from '@/app/query/useCard';
import { useConfirmCard } from '@/app/query/useCofirmCard';
import { useState } from 'react';

interface IProps {
  next: () => void;
  prev: () => void;
  total: number;
  form: TOrderProduct | undefined
}

const CardForm = (props: IProps) => {
  const { next, prev, total, form } = props;
  const [errorMessage, setErrorMessage] = useState<string>();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const createPaymentIntent = useCard()
  const confirmCard = useConfirmCard({ stripe: stripe! });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form) {
      if (!stripe || !elements) {
        return;
      }
      const clientSecret = await createPaymentIntent.mutateAsync(total)
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }
      console.log(elements)
      console.log(form.name)
      console.log(form.phone)
      const result = await confirmCard.mutateAsync({ elements, clientSecret, form });
      if (result.error) {
        setErrorMessage(result.error.message)
      }
      else if (result.paymentIntent?.status === 'succeeded') {
        console.log('Payment successful:', result.paymentIntent);
        dispatch(add(form));
        dispatch(clear())
        next();
      }
    }
  };

  if (!stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Card className='bg-white p-4 max-w-[800px] mx-auto my-0'>
        <form
          onSubmit={onSubmit}
          className="bg-white p-2 rounded-md"
        >
          <PaymentElement options={{
            defaultValues: {
              billingDetails: {
                phone: form?.phone,
                name: form?.name,
                address: {
                  city: form?.city,
                  country: form?.country,
                  line1: form?.address,
                },
              }
            }
          }} />
          {errorMessage && <div>{errorMessage}</div>}
          <div className='flex gap-2 justify-between flex-col'>
            <button
              disabled={!stripe || confirmCard.isPending || createPaymentIntent.isPending}
              className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
            >
              {(confirmCard.isPending || createPaymentIntent.isPending) ? "Processing..." : `Pay $${total}`}
            </button>
            <Button onClick={prev} className='mt-2 p-5 w-full'>Back</Button>
          </div>
        </form>
      </Card>
    </>

  );
};

export default CardForm;

