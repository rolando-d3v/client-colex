import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../modules/auth/hooks/useAuth";
import {
  toggleDarkMode,
  openToggleSidebar,
} from "../../../Redux/settingAppSlice";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./headerBar.module.css";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const HeaderBar = () => {
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
    <header className={styles.headerBar}>
      {/* ── Hamburger (mobile) ─────────────────────────── */}
      <button
        className={styles.menuBtn}
        onClick={() => dispatch(openToggleSidebar(!sidebarOpen))}
      >
        <FiMenu />
      </button>

    

      <div>
        <h6>peru</h6>
      </div>

      {/* ── Acciones ───────────────────────────────────── */}
      <div className={styles.actions}>
        <ToggleTheme />
       

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
            <span className={styles.userName}>{user?.nombre || "Usuario"}</span>
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

export default HeaderBar;
