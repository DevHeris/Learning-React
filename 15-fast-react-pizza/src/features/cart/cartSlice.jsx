import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      state.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      state.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  addItem,
  deleteItem,
} = cartSlice.actions;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curItem) => sum + curItem.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curItem) => sum + curItem.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
export const getUsername = (state) => state.user.username;

export default cartSlice.reducer;
