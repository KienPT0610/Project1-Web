import { TOrderProduct } from "@/types/product.types"
import { Stripe, StripeElements } from "@stripe/stripe-js"
import { useMutation } from "@tanstack/react-query"

type TCard = StripeElements | undefined

export const useConfirmCard = ({
  stripe,
}: {
  stripe: Stripe,
}) => {
  return useMutation({
    mutationFn: ({ elements, clientSecret, form }: { elements: TCard, clientSecret: string, form?: TOrderProduct }) => stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.href,
        payment_method_data: {
          billing_details: {
            name: form?.name,
            phone: form?.phone,
            address: {
              city: form?.city,
              country: form?.country,
              line1: form?.address
            },
            email: ''
          }
        },
        payment_method: 'card',
      },
      redirect: "if_required"
    })
  })
}