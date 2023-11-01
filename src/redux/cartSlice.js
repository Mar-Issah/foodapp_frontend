import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
        const removedProduct = state.products[productIndex];
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;
      }
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
