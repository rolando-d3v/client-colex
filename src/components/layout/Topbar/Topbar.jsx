import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import { toggleDarkMode, openToggleSidebar } from "../../../Redux/settingAppSlice";
import { FiMenu, FiSun, FiMoon, FiBell, FiUser } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, activeRole, handleLogout } = useAuth();
  const isDarkMode = useSelector((state) => state.SETTING_APP.isDarkMode);
  const sidebarOpen = useSelector((state) => state.SETTING_APP.estado_sidebar);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.topbar}>
      {/* ── Hamburger (mobile) ─────────────────────────── */}
      <button
        className={styles.menuBtn}
        onClick={() => dispatch(openToggleSidebar(!sidebarOpen))}
      >
        <FiMenu />
      </button>

      <div className={styles.spacer} />

      {/* ── Acciones ───────────────────────────────────── */}
      <div className={styles.actions}>
        <button
          className={styles.iconBtn}
          onClick={() => dispatch(toggleDarkMode())}
          title={isDarkMode ? "Modo claro" : "Modo oscuro"}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button className={styles.iconBtn} title="Notificaciones">
          <FiBell />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userMenu} ref={dropdownRef}>
          <button
            className={styles.userBtn}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className={styles.avatar}>
              {user?.nombre?.[0]?.toUpperCase() || "U"}
            </div>
            <span className={styles.userName}>
              {user?.nombre || "Usuario"}
            </span>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <strong>
                  {user?.nombre} {user?.apellido}
                </strong>
                <small>{activeRole?.replace("_", " ")}</small>
              </div>
              <hr className={styles.dropdownDivider} />
              <button
                className={styles.dropdownItem}
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/perfil");
                }}
              >
                <FiUser /> Mi perfil
              </button>
              <button
                className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}
                onClick={() => {
                  setDropdownOpen(false);
                  handleLogout();
                }}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
