export type TProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  total: number;
}

export type TProductData = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  brand: string;
  category: string;
  best_seller?: boolean;
  hot?: boolean;
  sale?: boolean;
  off?: number;
  comments?: number;
  star: number;
}

export type TCartProduct = TProductData & { quantity: number, total: number }

export type TOrderProduct = {
  name: string;
  address: string;
  phone: string;
  country: string;
  city: string;
  status: string;
  note?: string;
  order_date: string;
  order: TCartProduct[];
}

export type TCard = {
  name: string;
  email: string;
}
