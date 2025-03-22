import { FAILED, IDLE, LOADING, SUCCESS } from "@/types/status.enum";
import { createSlice } from "@reduxjs/toolkit";
import { TCartProduct, TProductData } from "@/types/product.types";
import { fetchProducts, fetchProductsById } from "@/services/product.service";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [] as TCartProduct[],
    products: [] as TCartProduct[],
    selectProduct: {} as TCartProduct | null,
    status: IDLE,
    error: "",
  },
  reducers: {
    findByFilters: (state, action) => {
      const filters = action.payload;

      const filteredProducts = state.allProducts.filter((product) => {
        let matches = true;

        if (filters.colors && filters.colors.length > 0) {
          matches = matches && filters.colors.includes(product.color);
        }

        if (filters.brands && filters.brands.length > 0) {
          matches = matches && filters.brands.includes(product.brand);
        }

        if (filters.categories && filters.categories.length > 0) {
          matches = matches && filters.categories.includes(product.category);
        }

        return matches;
      });

      state.products = filteredProducts;

      if (filteredProducts.length === 0) {
        state.status = FAILED;
        state.error = "No products found";
        return;
      }

      state.status = SUCCESS;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = SUCCESS;
        state.allProducts = action.payload.map((product: TProductData) => ({
          ...product,
          quantity: 0,
          total: 0,
        }));
        state.products = state.allProducts;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message || "";
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.status = SUCCESS;
        state.selectProduct = {
          ...action.payload,
          quantity: 0,
          total: 0,
        };
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message || "";
      });
  },
});

export const { findByFilters } = productsSlice.actions;
export default productsSlice.reducer;
