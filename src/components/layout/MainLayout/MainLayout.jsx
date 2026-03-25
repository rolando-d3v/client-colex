import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { useSelector } from "react-redux";
import styles from "./MainLayout.module.css";

/**
 * Layout principal del sistema (autenticado).
 * Incluye Sidebar + Topbar + Contenido principal.
 */
const MainLayout = () => {
  const sidebarOpen = useSelector(
    (state) => state.SETTING_APP.estado_sidebar
  );

  return (
    <div className={`${styles.layout} ${sidebarOpen ? "" : styles.layoutCollapsed}`}>
      <Sidebar />
      <div className={styles.content}>
        <Topbar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
