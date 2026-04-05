import { createSlice } from "@reduxjs/toolkit";

// ─── Estado inicial ─────────────────────────────────────────
const initialState = {
  // usuario autenticado
  user: null,

  // cursos del colegio
  cursos: [],

  // docentes del colegio
  docentes: [],

  // alumnos del colegio
  alumnos: [],

  // padres del colegio
  padres: [],

  // rol activo seleccionado (cuando tiene múltiples)
  activeRole: null,

  // estado de autenticación
  isAuthenticated: false,

};

// ─── Slice ──────────────────────────────────────────────────
const alumnoSlice = createSlice({
  name: "alumno",
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

    // Cambiar rol activo (para usuarios con múltiples roles)
    setActiveRole: (state, action) => {
      state.activeRole = action.payload;
    },

    // Seleccionar colegio (para super_admin que gestiona múltiples)
    setColegio: (state, action) => {
      state.colegio = action.payload;
    },

  },
});

export const {
  setCredentials,
  setActiveRole,
  setColegio,
} = alumnoSlice.actions;

export default alumnoSlice.reducer;
