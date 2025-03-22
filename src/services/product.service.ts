import { TProductData } from "@/types/product.types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://dummyjson.com/products/category/smartphones";

const fetchAPI = async (params: string): Promise<TProductData[]> => {
  const res = await fetch(`${baseURL}${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.products.map((product: any) => ({
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.images[0],
    description: product.description,
    sale: (product.discountPercentage > 0) ? true : false,
    off: product.discountPercentage || 0,
    star: 4,
    brand: product.brand || "Unknown",
    model: product.model || "Unknown",
    color: product.color || "Unknown",
    category: product.category || "Unknown",
    comments: 99,
  }));
};

const fetchAPIById = async (id: number): Promise<TProductData> => {
  const res = await fetch(`${baseURL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();
  const product = data.product;

  return {
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image,
    description: product.description,
    color: product.color,
    brand: product.brand,
    category: product.category,
    sale: product.onSale,
    star: 4,
    off: product.discount || 0,
    comments: 99,
  };
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (type: string) => {
    if (!type) {
      return await fetchAPI("");
    }
    return await fetchAPI(`/category?type=${type}`); // Lấy tất cả sản phẩm
  }
);

export const fetchProductsById = createAsyncThunk(
  "products/fetchProductsById",
  async (id: number) => {
    const data = await fetchAPIById(id);
    return data;
  }
);
