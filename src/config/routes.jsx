import { createBrowserRouter } from "react-router";
import { ROLES } from "./constants";

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
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
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
    element: <PrivateRoute allowedRoles={[ROLES.SUPER_ADMIN]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/admin/colegios",
            element: <ComingSoon title="Gestión de Colegios" />,
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - SUPER_ADMIN + ADMIN_COLEGIO
  // ════════════════════════════════════════════════════════════
  {
    element: (
      <PrivateRoute
        allowedRoles={[ROLES.SUPER_ADMIN, ROLES.ADMIN_COLEGIO]}
      />
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/docentes", element: <ComingSoon title="Docentes" /> },
          {
            path: "/docentes/horario",
            element: <ComingSoon title="Horarios" />,
          },
          { path: "/usuarios", element: <ComingSoon title="Usuarios" /> },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS - SUPER_ADMIN + ADMIN_COLEGIO + DOCENTE
  // ════════════════════════════════════════════════════════════
  {
    element: (
      <PrivateRoute
        allowedRoles={[ROLES.SUPER_ADMIN, ROLES.ADMIN_COLEGIO, ROLES.DOCENTE]}
      />
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/alumnos", element: <ComingSoon title="Alumnos" /> },
          {
            path: "/alumnos/:id",
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
  //  RUTAS PRIVADAS - Académico (todos menos padre)
  // ════════════════════════════════════════════════════════════
  {
    element: (
      <PrivateRoute
        allowedRoles={[
          ROLES.SUPER_ADMIN,
          ROLES.ADMIN_COLEGIO,
          ROLES.DOCENTE,
          ROLES.ALUMNO,
        ]}
      />
    ),
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
  //  RUTAS PRIVADAS - Pagos (admin + padre)
  // ════════════════════════════════════════════════════════════
  {
    element: (
      <PrivateRoute
        allowedRoles={[
          ROLES.SUPER_ADMIN,
          ROLES.ADMIN_COLEGIO,
          ROLES.PADRE,
        ]}
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
