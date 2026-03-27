import { Outlet } from "react-router";

/**
 * Layout para páginas públicas (login, recover, register).
 * Renderiza solo el contenido sin sidebar ni topbar.
 */
const AuthLayout = () => {
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
