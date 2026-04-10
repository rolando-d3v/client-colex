import api from "../../../config/axios";

// ─── Obtener cursos del colegio ─────────────────────
export const getCursoService = (id_colegio) =>
  api.get(`/curso/all-curso/${id_colegio}`).then((res) => res.data);



// /colegio/data-colegio