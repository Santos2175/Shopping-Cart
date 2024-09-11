import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('carts')
    ? JSON.parse(localStorage.getItem('carts'))
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id: productId, quantity });
      }
      localStorage.setItem('carts', JSON.stringify(state.items));
    },
    toggleStatusTab: (state) => {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;
