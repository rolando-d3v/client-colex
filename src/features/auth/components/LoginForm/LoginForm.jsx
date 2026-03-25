import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "../../hooks/useLogin";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import styles from "./LoginForm.module.css";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es requerido")
    .email("Ingresa un correo válido"),
  password: z
    .string()
    .min(1, "La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const LoginForm = () => {
  const { handleLogin, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* ── Email ──────────────────────────────────────── */}
      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">
          Correo electrónico
        </label>
        <div className={`${styles.inputWrapper} ${errors.email ? styles.inputWrapperError : ""}`}>
          <FiMail className={styles.icon} />
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="correo@colegio.edu.pe"
            autoComplete="email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      {/* ── Password ───────────────────────────────────── */}
      <div className={styles.group}>
        <label className={styles.label} htmlFor="password">
          Contraseña
        </label>
        <div className={`${styles.inputWrapper} ${errors.password ? styles.inputWrapperError : ""}`}>
          <FiLock className={styles.icon} />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className={styles.input}
            placeholder="••••••••"
            autoComplete="current-password"
            {...register("password")}
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      {/* ── Olvidaste tu contraseña ─────────────────────── */}
      <div className={styles.options}>
        <a href="/recover" className={styles.link}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {/* ── Submit ─────────────────────────────────────── */}
      <button
        type="submit"
        className={styles.submit}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className={styles.spinner} />
        ) : (
          "Iniciar sesión"
        )}
      </button>

      {/* ── Link a Registro ──────────────────────────── */}
      <div className={styles.footerLink}>
        <span>¿No tienes cuenta?</span>
        <a href="/register" className={styles.link}>
          Regístrate
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
