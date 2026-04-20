import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../../modules/auth/hooks/useAuth";
import { useLayout } from "../../../hooks/useLayout";
import { DynamicIcon } from "./DynamicIcon";
import { FiLogOut, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const { handleLogout, colegio, activeRole } = useAuth();
  const { estado_sidebar, handleOpenToggleSidebar } = useLayout();

  console.log(activeRole);

  const navItems = activeRole?.children;

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

      <Menu items={navItems} />
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

// Componente recursivo para renderizar el árbol
const MenuItem = ({ item, level = 0 }) => {
  console.log(item);
  
  const [isOpen, setIsOpen] = useState(level === 1);
  const hasChildren = item.children?.length > 0;
  const { estado_sidebar } = useLayout();

  const isLink = !hasChildren;
  // const targetRoute = item?.path || "https://www.youtube.com/watch?v=8YZqv_T16E&t" || "#";
  const targetRoute = item?.path || item?.url || "#";

  const paddingLeft = estado_sidebar ? `${level * 20 + 16}px` : "0px";

  // Solo mostrar icono en nivel 0 (items principales), no en hijos
  const showIcon = level === 0;

  const content = (
    <>
      {showIcon && (
        <span className={styles.menuIcon}>
          {item.icono ? <DynamicIcon iconName={item.icono} /> : "📁"}
        </span>
      )}
      {estado_sidebar && <span className={styles.menuText}>{item.nombre}</span>}
      {estado_sidebar && hasChildren && (
        <span
          className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ""}`}
        >
          <FiChevronDown />
        </span>
      )}
    </>
  );

  return (
    <div className={styles.menuItem}>
      {isLink ? (
        <NavLink
          to={targetRoute}
          className={({ isActive }) =>
            `${styles.menuHeader} ${isActive ? styles.menuHeaderActive : ""}`
          }
          style={{ paddingLeft: estado_sidebar ? paddingLeft : undefined }}
          title={!estado_sidebar ? item.nombre : undefined}
        >
          {content}
        </NavLink>
      ) : (
        <div
          className={styles.menuHeader}
          style={{ paddingLeft: estado_sidebar ? paddingLeft : undefined }}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
          title={!estado_sidebar ? item.nombre : undefined}
        >
          {content}
        </div>
      )}

      {hasChildren && isOpen && estado_sidebar && (
        <div className={styles.menuChildren}>
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// Componente principal
const Menu = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items?.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </nav>
  );
};
