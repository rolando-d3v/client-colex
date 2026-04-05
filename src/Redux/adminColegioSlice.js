import { createSlice } from "@reduxjs/toolkit";

// ─── Estado inicial ─────────────────────────────────────────
const initialState = {

  // cursos del colegio
  cursos: [],

  // docentes del colegio
  docentes: [],

  // alumnos del colegio
  alumnos: [],

  // padres del colegio
  padres: [],


};

// ─── Slice ──────────────────────────────────────────────────
const adminColegioSlice = createSlice({
  name: "adminColegio",
  initialState,

  reducers: {
    // Establecer credenciales (login o verify exitoso)
    setCredentials: (state, action) => {
      const { user, roles, colegio } = action.payload;
      state.user = user;
      state.roles = roles || [];
      state.activeRole = roles?.[0] || null;
      state.colegio = colegio || null;
      state.isAuthenticated = true;
      state.error = null;
    },

    // Seleccionar colegio (para super_admin que gestiona múltiples)
    setColegio: (state, action) => {
      state.colegio = action.payload;
    },

  },
});

export const {
  setCredentials,
  setColegio,
} = adminColegioSlice.actions;

export default adminColegioSlice.reducer;
