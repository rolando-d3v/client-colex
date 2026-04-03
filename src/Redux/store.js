import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import settingAppReducer from "./settingAppSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    SETTING_APP: settingAppReducer,
    CART_APP: cartReducer,
  },
});
