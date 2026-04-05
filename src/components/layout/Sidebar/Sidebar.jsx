import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useAuth } from "../../../modules/auth/hooks/useAuth";
import { ROLES } from "../../../config/constants";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiDollarSign,
  FiMail,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiGrid,
  FiUser,
  FiBookOpen,
} from "react-icons/fi";
import { openToggleSidebar } from "../../../Redux/settingAppSlice";
import logo from "../../../assets/logos/santa_rosa-removebg-preview.png";
import styles from "./Sidebar.module.css";

/**
 * Configuración de navegación por rol
 */
const getNavItems = (roles) => {
  const items = [];

  items.push({ label: "Dashboard", path: "/dashboard", icon: <FiHome /> });

  if (roles.includes(ROLES.SUPER_ADMIN)) {
    items.push({
      label: "Colegios",
      path: "/admin/colegios",
      icon: <FiGrid />,
    });
  }

  if (
    roles.includes(ROLES.SUPER_ADMIN) ||
    roles.includes(ROLES.ADMIN_COLEGIO) ||
    roles.includes(ROLES.DOCENTE)
  ) {
    items.push({ label: "Alumnos", path: "/alumnos", icon: <FiUsers /> });
  }

  if (
    roles.includes(ROLES.SUPER_ADMIN) ||
    roles.includes(ROLES.ADMIN_COLEGIO)
  ) {
    items.push({ label: "Docentes", path: "/docentes", icon: <FiUser /> });
  }

  if (!roles.includes(ROLES.PADRE) || roles.length > 1) {
    items.push({
      label: "Académico",
      path: "/academico/cursos",
      icon: <FiBook />,
    });
  }

  if (
    roles.includes(ROLES.SUPER_ADMIN) ||
    roles.includes(ROLES.ADMIN_COLEGIO) ||
    roles.includes(ROLES.PADRE)
  ) {
    items.push({ label: "Pagos", path: "/pagos", icon: <FiDollarSign /> });
  }

  items.push({
    label: "Mensajes",
    path: "/comunicaciones/mensajes",
    icon: <FiMail />,
  });

  if (
    roles.includes(ROLES.SUPER_ADMIN) ||
    roles.includes(ROLES.ADMIN_COLEGIO)
  ) {
    items.push({ label: "Usuarios", path: "/usuarios", icon: <FiSettings /> });
  }

  return items;
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const { roles, user, handleLogout, colegio } = useAuth();
  const sidebarOpen = useSelector((state) => state.SETTING_APP.estado_sidebar);

  const navItems = getNavItems(roles);

  const toggleSidebar = () => {
    dispatch(openToggleSidebar(!sidebarOpen));
  };

  console.log(colegio);
  

  return (
    <aside
      className={`${styles.sidebar} ${sidebarOpen ? "" : styles.sidebarCollapsed}`}
    >
      {/* ── Header ─────────────────────────────────────── */}
      <div className={styles.header}>
        <div className={styles.brand}>
          <img src={colegio?.logo_url} alt="logo" className={styles.logo} />
        </div>
        <button className={`${styles.toggle} ${sidebarOpen && styles.toggle_open}`} onClick={toggleSidebar}>
          <FiChevronLeft
            style={{
              transform: sidebarOpen ? "rotate(0)" : "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        </button>
      </div>{" "}


      {/* ── Colegio actual ─────────────────────────────── */}
      {colegio && sidebarOpen && (
        <div className={styles.colegio}>
          <span>{colegio.nombre}</span>
        </div>
      )}




      {/* ── Nav items ──────────────────────────────────── */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ""}`
            }
            title={item.label}
          >
            <span className={styles.linkIcon}>{item.icon}</span>
            {sidebarOpen && (
              <span className={styles.linkText}>{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>





      
      {/* ── Footer (user + logout) ────────────────────── */}
      <div className={styles.footer}>
        <button
          className={styles.logoutBtn}
          onClick={handleLogout}
          title="Cerrar sesión"
        >
          <FiLogOut />
          {sidebarOpen && <span>Salir</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
