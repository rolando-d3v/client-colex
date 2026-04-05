import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../../modules/auth/hooks/useAuth";
import { useLayout } from "../../../hooks/useLayout";
import { DynamicIcon } from "./DynamicIcon";
import {
  FiLogOut,
  FiChevronLeft,
} from "react-icons/fi";



const Sidebar = () => {
  
  const { handleLogout, colegio, activeRole } = useAuth();
  const { estado_sidebar, handleOpenToggleSidebar } = useLayout();

  console.log(activeRole?.opciones);

  const navItems = activeRole?.opciones;

  const toggleSidebar = () => {
    handleOpenToggleSidebar(!estado_sidebar);
  };


  return (
    <aside
      className={`${styles.sidebar} ${estado_sidebar ? "" : styles.sidebarCollapsed}`}
    >
      {/* ── Header ─────────────────────────────────────── */}
      <div className={styles.header}>
        <div className={styles.brand}>
          <img src={colegio?.logo_url} alt="logo" className={styles.logo} />
        </div>
        <button
          className={`${styles.toggle} ${estado_sidebar && styles.toggle_open}`}
          onClick={toggleSidebar}
        >
          <FiChevronLeft
            style={{
              transform: estado_sidebar ? "rotate(0)" : "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        </button>
      </div>{" "}
      {/* ── Colegio actual ─────────────────────────────── */}
      {colegio && estado_sidebar && (
        <div className={styles.colegio}>
          <span>{colegio.nombre}</span>
        </div>
      )}
      {/* ── Nav items ──────────────────────────────────── */}
      <nav className={styles.nav}>
        {navItems?.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ""}`
            }
            title={item.nombre}
          >
            <span className={styles.linkIcon}>
              <DynamicIcon iconName={item?.icono} />
            </span>
            {estado_sidebar && (
              <span className={styles.linkText}>{item.nombre}</span>
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
          {estado_sidebar && <span>Salir</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
