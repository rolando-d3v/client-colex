import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  estado_sidebar: true,

  // falta elegir

  select_categoria: false,
  estado_modal: false,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,

  reducers: {
    setOpenToggleSidebar: (state, action) => {
      state.estado_sidebar = action.payload;
    },

    // falta elegir

    x_select_categoria: (state, action) => {
      state.select_categoria = action.payload;
    },

    openModalBasex: (state, action) => {
      state.estado_modal = action.payload;
    },
  },
});

export const { setOpenToggleSidebar, x_select_categoria, openModalBasex } =
  layoutSlice.actions;

export default layoutSlice.reducer;
