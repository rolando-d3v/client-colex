import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import layoutReducer from "./layoutSlice";
// import cartReducer from "./cartSlice";
import adminColegioReducer from "./adminColegioSlice";
import docenteReducer from "./docenteSlice";
import alumnoReducer from "./alumnoSlice";
import padreReducer from "./padreSlice";
import superAdminReducer from "./superAdminSlice";

export const store = configureStore({
  reducer: {
    Auth: authReducer,
    Layout: layoutReducer,
    Super_Admin: superAdminReducer,
    Admin_Colegio: adminColegioReducer,
    Docente: docenteReducer,
    Alumno: alumnoReducer,
    Padre: padreReducer,
    // CART_APP: cartReducer,
  },
});
