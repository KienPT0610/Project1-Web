import { TProductData } from "@/types/product.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import tozot6 from "@/assets/images/tozot6.png";

const baseURL = "https://fakestoreapi.in/api/products";

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
    image:
      product.image && product.image.startsWith("http")
        ? product.image
        : tozot6.src,
    description: product.description,
    onSale: product.onSale || false,
    star: 4,
    brand: product.brand || "Unknown",
    model: product.model || "Unknown",
    color: product.color || "Unknown",
    category: product.category || "Unknown",
    off: product.discount || 0,
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
