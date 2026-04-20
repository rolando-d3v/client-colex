import api from "../../../config/axios";

// ─── ROLES ─────────────────────────────────────────────
export const getRolesService = () =>
  api.get("/auth/roles").then((res) => res.data);

export const createRolService = (data) =>
  api.post("/auth/rol", data).then((res) => res.data);

export const updateRolService = (id, data) =>
  api.put(`/auth/rol/${id}`, data).then((res) => res.data);

export const deleteRolService = (id) =>
  api.delete(`/auth/rol/${id}`).then((res) => res.data);

// ─── OPCIONES ──────────────────────────────────────────
export const getOpcionesByRolService = (rolId) =>
  api.get(`/auth/opciones/${rolId}`).then((res) => res.data);

export const createOpcionService = (data) =>
  api.post("/auth/opcion", data).then((res) => res.data);

export const updateOpcionService = (id, data) =>
  api.put(`/auth/opcion/${id}`, data).then((res) => res.data);

export const deleteOpcionService = (id) =>
  api.delete(`/auth/opcion/${id}`).then((res) => res.data);
