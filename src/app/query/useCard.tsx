import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useMutation } from "@tanstack/react-query"

export const useCard = () => {
  return useMutation({
    mutationFn: async (amount: number) => {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      });

      const data = await response.json();
      return data.clientSecret;
    }
  })
}
