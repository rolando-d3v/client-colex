import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../modules/auth/hooks/useAuth";
import { openToggleSidebar } from "../../../Redux/settingAppSlice";
import { FiMenu, FiBell, FiUser, FiChevronUp, FiShield } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./headerBar.module.css";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const HeaderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, roles, activeRole, handleLogout, handleSetActiveRole } =
    useAuth();

  const sidebarOpen = useSelector((state) => state.SETTING_APP.estado_sidebar);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const dropdownRef = useRef(null);
  const roleDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(e.target)
      ) {
        setRoleDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(selectedRole);

  return (
    <header className={styles.headerBar}>
      {/* ── Hamburger (mobile) ─────────────────────────── */}
      <button
        className={styles.menuBtn}
        onClick={() => dispatch(openToggleSidebar(!sidebarOpen))}
      >
        <FiMenu />
      </button>

      {/* ── Role Selector ──────────────────────────────── */}
      <div className={styles.roleSelector} ref={roleDropdownRef}>
        <button
          className={`${styles.roleTrigger} ${roleDropdownOpen ? styles.roleTriggerOpen : ""}`}
          onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
        >
          <FiShield className={styles.roleIcon} />
          <span className={styles.roleTriggerLabel}>
            {selectedRole.nombre
              ? roles.find((r) => r.id === selectedRole.id)?.nombre
              : activeRole?.nombre}
          </span>
          <FiChevronUp
            className={`${styles.roleChevron} ${roleDropdownOpen ? styles.roleChevronOpen : ""}`}
          />
        </button>

        {roleDropdownOpen && (
          <div className={styles.roleDropdown}>
            {roles.map((role) => (
              <button
                key={role.id}
                className={`${styles.roleOption} ${
                  selectedRole?.id === role.id ? styles.roleOptionActive : ""
                }`}
                onClick={() => {
                  setSelectedRole(role);
                  setRoleDropdownOpen(false);
                  handleSetActiveRole(role)
                }}
              >
                {role.nombre}
              </button>
            ))}
          </div>
        )}
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
