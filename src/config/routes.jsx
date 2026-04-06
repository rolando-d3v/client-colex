import { createBrowserRouter } from "react-router";

// ─── Guards ─────────────────────────────────────────────────
import PrivateRoute from "../components/guards/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/guards/PublicRoute/PublicRoute";

// ─── Layouts ────────────────────────────────────────────────
import AuthLayout from "../components/layout/AuthLayout/AuthLayout";
import MainLayout from "../components/layout/MainLayout/MainLayout";

// ─── Auth pages ─────────────────────────────────────────────
import LoginPage from "../modules/auth/pages/LoginPage/LoginPage";
import RecoverPage from "../modules/auth/pages/RecoverPage/RecoverPage";
import RegisterUserPage from "../modules/auth/pages/RegisterUserPage/RegisterUserPage";
import UnauthorizedPage from "../modules/auth/pages/UnauthorizedPage/UnauthorizedPage";
import CursoColegio from "../modules/admin_colegio/pages/CursoColegioPage/CursoColegio";

// ─── Placeholder para páginas aún no implementadas ──────────
const ComingSoon = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
   
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
  </div>
);



// ─── Router ─────────────────────────────────────────────────
export const router = createBrowserRouter([
  // ════════════════════════════════════════════════════════════
  //  RUTAS PÚBLICAS (login, recover, register)
  // ════════════════════════════════════════════════════════════
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/register", element: <RegisterUserPage /> },
          { path: "/recover", element: <RecoverPage /> },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  PÁGINA NO AUTORIZADO
  // ════════════════════════════════════════════════════════════
  { path: "/no-autorizado", element: <UnauthorizedPage /> },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - Todos los roles autenticados
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/dashboard", element: <ComingSoon title="Dashboard" /> },
          { path: "/perfil", element: <ComingSoon title="Mi Perfil" /> },
          {
            path: "/comunicaciones/mensajes",
            element: <ComingSoon title="Mensajes" />,
          },
          {
            path: "/comunicaciones/bandeja",
            element: <ComingSoon title="Bandeja" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - Solo SUPER_ADMIN
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[1]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/super-admin/colegios",
            element: <ComingSoon title="Gestión de Colegios" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS  ADMIN_COLEGIO
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[2]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/admin-colegio/dashboard",
            element: <ComingSoon title="Dashboard" />,
          },
          {
            path: "/admin-colegio/cursos",
            element: <CursoColegio />,
          },
          {
            path: "/admin-colegio/docentes",
            element: <ComingSoon title="Docentes" />,
          },
          {
            path: "/admin-colegio/alumnos",
            element: <ComingSoon title="Alumnos" />,
          },
          {
            path: "/admin-colegio/horario",
            element: <ComingSoon title="Horarios" />,
          },
          {
            path: "/admin-colegio/usuarios",
            element: <ComingSoon title="Usuarios" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS  DOCENTE
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[3]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/docente/dashboard",
            element: <ComingSoon title="Dashboard" />,
          },
          { path: "/docente/cursos", element: <ComingSoon title="Cursos" /> },
          { path: "/docente/alumnos", element: <ComingSoon title="Alumnos" /> },
          {
            path: "/docente/alumnos/:id",
            element: <ComingSoon title="Detalle Alumno" />,
          },
          {
            path: "/alumnos/matricula",
            element: <ComingSoon title="Matrícula" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - Alumno
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[4]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/academico/cursos",
            element: <ComingSoon title="Cursos" />,
          },
          {
            path: "/academico/cursos/:id",
            element: <ComingSoon title="Detalle del Curso" />,
          },
          {
            path: "/academico/evaluaciones",
            element: <ComingSoon title="Evaluaciones" />,
          },
          {
            path: "/academico/tareas",
            element: <ComingSoon title="Tareas" />,
          },
          {
            path: "/academico/asistencia",
            element: <ComingSoon title="Asistencia" />,
          },
          {
            path: "/academico/materiales",
            element: <ComingSoon title="Materiales" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - padre
  // ════════════════════════════════════════════════════════════
  {
    element: (
      <PrivateRoute
        allowedRoles={[5]}
      />
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/pagos", element: <ComingSoon title="Pagos" /> },
          {
            path: "/pagos/pensiones",
            element: <ComingSoon title="Pensiones" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  CATCH ALL → 404
  // ════════════════════════════════════════════════════════════
  {
    path: "*",
    element: <ComingSoon title="Página no encontrada (404)" />,
  },
]);
