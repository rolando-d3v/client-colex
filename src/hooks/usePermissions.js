import { useMemo } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { ROLES } from "../config/constants";

/**
 * Hook para verificar permisos basados en roles.
 *
 * Uso:
 *   const { canManageUsers, canViewPayments } = usePermissions();
 */
export const usePermissions = () => {
  const { roles, activeRole } = useAuth();

  const permissions = useMemo(() => {
    const is = (role) => roles.includes(role);

    return {
      // ─── Gestión de colegios (solo super_admin) ───
      canManageColegios: is(ROLES.SUPER_ADMIN),

      // ─── Gestión de usuarios ──────────────────────
      canManageUsers:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      // ─── Gestión de docentes ──────────────────────
      canManageDocentes:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      // ─── Gestión de alumnos ───────────────────────
      canManageAlumnos:
        is(ROLES.SUPER_ADMIN) ||
        is(ROLES.ADMIN_COLEGIO) ||
        is(ROLES.DOCENTE),

      // ─── Ver / gestionar pagos ────────────────────
      canViewPayments:
        is(ROLES.SUPER_ADMIN) ||
        is(ROLES.ADMIN_COLEGIO) ||
        is(ROLES.PADRE),

      canManagePayments:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      // ─── Académico ───────────────────────────────
      canManageCursos:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      canGradeStudents:
        is(ROLES.SUPER_ADMIN) ||
        is(ROLES.ADMIN_COLEGIO) ||
        is(ROLES.DOCENTE),

      canSubmitTareas: is(ROLES.ALUMNO),

      canViewCalificaciones:
        is(ROLES.ALUMNO) || is(ROLES.PADRE),

      // ─── Comunicaciones ──────────────────────────
      canSendMessages: true, // todos pueden

      // ─── Reportes ────────────────────────────────
      canViewReports:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      // ─── Permisos de escritura generales ──────────
      canCreate:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      canEdit:
        is(ROLES.SUPER_ADMIN) || is(ROLES.ADMIN_COLEGIO),

      canDelete: is(ROLES.SUPER_ADMIN),
    };
  }, [roles]);

  return permissions;
};
