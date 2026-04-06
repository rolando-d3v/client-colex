import { useColegio } from "../../../admin_colegio/hooks/useColegio";
import LoginForm from "../../components/LoginForm/LoginForm";
import Fondo from "./Fondo";
import styles from "./LoginPage.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const LoginPage = () => {
  const formRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);

  useEffect(() => {
    // Equivalente a item10: x: -400 → 0, opacity 0 → 1, delay 0.5s, duration 0.6s
    gsap.fromTo(
      formRef.current,
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: "power2.out" },
    );

    // Equivalente a item1: x: -400 → 0, delay 1s, duration 1s
    gsap.fromTo(
      span1Ref.current,
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" },
    );

    // Equivalente a item2: x: -800 → 0, delay 2s, duration 1s
    gsap.fromTo(
      span2Ref.current,
      { x: -800, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 2, ease: "power2.out" },
    );

    // Equivalente a item3: x: -1500 → 0, delay 3s, duration 1s
    gsap.fromTo(
      span3Ref.current,
      { x: -1500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 3, ease: "power2.out" },
    );
  }, []);

  const host = window.location.hostname;

  console.log(host);

  const { query_colegio } = useColegio(host);
  console.log(query_colegio.data);

  return (
    <div className={styles.page}>
      <div ref={formRef} className={styles.content_form}>
        <LoginForm />
      </div>

      <div className={styles.div_text}>
        <h1 className={styles.content_text}>
          <span ref={span1Ref} className={styles.x_span}>
            SISTEMA DE GESTIÓN
          </span>
          <span ref={span2Ref} className={styles.x_span}>
            EDUCATIVA PARA
          </span>
          <span ref={span3Ref} className={styles.x_span}>
            COLEGIOS
          </span>
        </h1>
      </div>


      <Fondo />

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
