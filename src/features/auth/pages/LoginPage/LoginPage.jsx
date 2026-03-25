import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* ── Logo / Branding ─────────────────────────── */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🎓</span>
          </div>
          <h1 className={styles.title}>Colex</h1>
          <p className={styles.subtitle}>
            Sistema de Gestión Escolar
          </p>
        </div>

        {/* ── Formulario ──────────────────────────────── */}
        <LoginForm />

        {/* ── Footer ──────────────────────────────────── */}
        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Colex. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* ── Background decoration ─────────────────────── */}
      <div className={styles.bg}>
        <div className={`${styles.bgCircle} ${styles.bgCircle1}`} />
        <div className={`${styles.bgCircle} ${styles.bgCircle2}`} />
        <div className={`${styles.bgCircle} ${styles.bgCircle3}`} />
      </div>
    </div>
  );
};

export default LoginPage;
