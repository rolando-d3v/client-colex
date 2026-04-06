import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "../../hooks/useLogin";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import * as FaIcons from "react-icons/fa";
import logo from "../../../../assets/logos/defensa.png";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router";
// import { ToastError, ToastSuccess } from "../../../tools/Toasting";
// import { useSelector, useDispatch } from "react-redux";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
const loginSchema = z.object({
  codigo: z.string().min(1, "El código es requerido"),
  password: z
    .string()
    .min(1, "La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const LoginForm = () => {
  const [eyePass, setEyePass] = useState(false);
  const { handleLogin, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const { colegio } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { codigo: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    handleLogin(data);
  };

  // MOSTRAR UN ERROR PERZONALIZADO
  const errorHookForm = (err) => {
    if (err) {
      return <span className={css.error_alert}>{err}</span>;
    }
  };

  //efecto de input label hacia arriba
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add(styles.focus);
    }
    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove(styles.focus);
      }
    }

    inputs.forEach((input) => {
      input?.addEventListener("focus", addcl);
      input?.addEventListener("blur", remcl);
    });

    //limitar numero en input de password
    var input = document.getElementById("codigo");
    input?.addEventListener("input", function () {
      if (this.value.length > 15) this.value = this.value.slice(0, 15);
    });
  }, []);

  //mostara el eye con el password
  const clickEyePassword = () => {
    setEyePass(!eyePass);
  };

  return (
    <form className={styles.form_login} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <div className={styles.content_logo}>
          <div>
            <img
              className={styles.logo}
              src={colegio?.logo_url}
              alt="logo_die"
              style={{ width: 170 }}
            />
          </div>
        </div>
        <p className={styles.sub_title}> {colegio?.nombre}</p>
      </div>

      <section className={`${styles.section_input}`}>
        <span className={styles.icon_login}>
          <FaIcons.FaUser className="" />
        </span>
        <div className="div_input">
          <label className={`${styles.label_form} `}>Código</label>
          <input
            autoComplete="off"
            className={`${styles.input} ${"input"}  ${styles.input_numero} `}
            type="text"
            name="codigo"
            id="codigo"
            {...register("codigo")}
          />
          {errorHookForm(errors.codigo?.message)}
        </div>
      </section>

      {/* ── Password ───────────────────────────────────── */}
      <section className={`${styles.section_input}`}>
        <span className={styles.icon_login}>
          <FaIcons.FaKey className="" />
        </span>
        <div className="control-input">
          <label htmlFor="password" className={`${styles.label_form} `}>
            Contraseña
          </label>
          <input
            autoComplete="off"
            type={eyePass ? "text" : "password"}
            name="password"
            id="password"
            className={`${styles.input} ${"input"} `}
            {...register("password")}
          />
          {watch("password") && (
            <span
              className={styles.eye_pass}
              onClick={() => clickEyePassword()}
            >
              {eyePass ? <FaIcons.FaEye /> : <FaIcons.FaEyeSlash />}
            </span>
          )}

          {errorHookForm(errors.password?.message)}
        </div>
      </section>

      {/* ── Submit ─────────────────────────────────────── */}
      <div className={styles.wrapper_button}>
        {watch("codigo") && watch("password") ? (
          <button
            type="submit"
            className={`${styles.__login}  ${styles.__checked} `}
          >
            Iniciar Sesión
          </button>
        ) : (
          <button className={styles.__login} disabled>
            Iniciar Sesión
          </button>
        )}
      </div>
      {/* ── Olvidaste tu contraseña ─────────────────────── */}
      <div className={styles.options}>
        <a href="/recover" className={styles.link}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      {/* ── Link a Registro ──────────────────────────── */}
      <div className={styles.footerLink}>
        <span>¿No tienes cuenta?</span>
        <Link to="/register" className={styles.link}>
          Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
