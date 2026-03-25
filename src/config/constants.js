// ─── API Base URL ───────────────────────────────────────────
export const API_URL_COLEX = import.meta.env.VITE_BACKEND_URL_COLEX || "http://localhost:4001/";

// ─── Roles del sistema ──────────────────────────────────────
export const ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN_COLEGIO: "admin_colegio",
  DOCENTE: "docente",
  ALUMNO: "alumno",
  PADRE: "padre",
};

// ─── Mapeo de roles → rutas por defecto después del login ───
export const DEFAULT_ROUTES = {
  [ROLES.SUPER_ADMIN]: "/admin/colegios",
  [ROLES.ADMIN_COLEGIO]: "/dashboard",
  [ROLES.DOCENTE]: "/academico/cursos",
  [ROLES.ALUMNO]: "/academico/cursos",
  [ROLES.PADRE]: "/alumnos",
};

// ─── Paginación por defecto ─────────────────────────────────
export const DEFAULT_PAGE_SIZE = 10;
