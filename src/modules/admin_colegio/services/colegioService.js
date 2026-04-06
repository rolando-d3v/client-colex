import api from "../../../config/axios";

// ─── Obtener datos del colegio ─────────────────────
export const getColegioService = (host) =>
  api.get(`/colegio/data-colegio?dominio=${host}`).then((res) => res.data);



// /colegio/data-colegio