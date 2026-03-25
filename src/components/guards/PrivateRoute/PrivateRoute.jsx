import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../features/auth/hooks/useAuth";

/**
 * Protege rutas que requieren autenticación.
 * Si no está autenticado → redirige a /login
 *
 * @param {string[]} allowedRoles - Roles permitidos (opcional).
 *   Si no se pasa, cualquier usuario autenticado puede acceder.
 *
 * Nota: AuthInitializer ya maneja la verificación inicial de sesión,
 * por lo que aquí solo se verifica autenticación y roles.
 */
const PrivateRoute = ({ allowedRoles }) => {
  const { isAuthenticated, roles } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const hasPermission = allowedRoles.some((role) => roles.includes(role));
    if (!hasPermission) {
      return <Navigate to="/no-autorizado" replace />;
    }
  }

  return <Outlet />;
};

export default PrivateRoute;
