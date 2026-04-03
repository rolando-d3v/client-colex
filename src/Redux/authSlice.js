import { createSlice } from "@reduxjs/toolkit";

// ─── Estado inicial ─────────────────────────────────────────
const initialState = {
  // usuario autenticado
  user: null,
  // { id, email, nombre, apellido, ... }

  // roles del usuario  ["super_admin", "admin_colegio"]
  roles: [],

  // rol activo seleccionado (cuando tiene múltiples)
  activeRole: null,

  // datos del colegio seleccionado (para admin_colegio, docente, etc.)
  colegio: null,

  // estado de autenticación
  isAuthenticated: false,

  // error de autenticación
  error: null,
};

// ─── Slice ──────────────────────────────────────────────────
const authSlice = createSlice({
  name: "auth",
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

    // Cerrar sesión
    logout: (state) => {
      state.user = null;
      state.roles = [];
      state.activeRole = null;
      state.colegio = null;
      state.isAuthenticated = false;
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

    // Guardar error de autenticación
    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    // Limpiar error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setCredentials,
  logout,
  setActiveRole,
  setColegio,
  setAuthError,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
