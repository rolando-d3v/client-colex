import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import HeaderBar from "../HeaderBar/HeaderBar";
import { useSelector } from "react-redux";
import styles from "./MainLayout.module.css";
import { useLayout } from "../../../hooks/useLayout";

/**
 * Layout principal del sistema (autenticado).
 * Incluye Sidebar + Topbar + Contenido principal.
 */
const MainLayout = () => {
    const { estado_sidebar } = useLayout();

  return (
    <div
      style={{
        padding: "6px",
      }}
    >
      <div
        className={`${styles.layout} ${estado_sidebar ? "" : styles.layoutCollapsed}`}
      >
        <Sidebar />
        <div className={styles.content}>
          <HeaderBar />
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
