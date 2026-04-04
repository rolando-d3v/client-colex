// ─── Obtener datos del colegio ─────────────────────
export const getColegioService = () =>
  api.get("/colegio/data-colegio").then((res) => res.data);
