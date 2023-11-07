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
      const idToRemove = action.payload.id;
      const removedProduct = state.products.find((product, idx) => idx === idToRemove);
      if (removedProduct) {
        // Calculate the quantity and total to be deducted
        const removedQuantity = removedProduct.quantity;
        const removedTotal = removedProduct.price * removedQuantity;

        // Update state based on the removed product
        state.products = state.products.filter((product, idx) => idx !== idToRemove);
        state.quantity -= 1;
        //state.quantity -= removedQuantity;
        state.total -= removedTotal;
      }
      // Check if the removed quantity is greater than the current quantity
      if (state.quantity < 0) {
        state.quantity = 0;
      }

      // Check if the removed total is greater than the current total
      if (state.total < 0) {
        state.total = 0;
      }

      // Calculate the new total after deducting the removedTotal
      state.total = state.products.reduce((total, product) => total + product.price * product.quantity, 0);
    },

    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
