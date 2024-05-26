import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/user/cartSlice";

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
});

export default store;
