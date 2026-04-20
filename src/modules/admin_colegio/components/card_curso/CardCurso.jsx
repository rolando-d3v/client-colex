import styles from "./card.module.css";
import { BsBook, BsPencil, BsTrash, BsEye } from "react-icons/bs";
import { useNavigate } from "react-router";

function CardCurso({
  id,
  nombre,
  nivel,
  grado,
  paralelo,
  profesor,
  estado,
  onVer,
  onEditar,
  onEliminar,
}) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.card} ${styles[estado]}`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <BsBook size={24} />
        </div>
        <span className={`${styles.badge} ${styles[estado]}`}>
          {estado === true ? "Activo" : "Inactivo"}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{nombre}</h3>
        <p className={styles.subtitle}>
          {nivel} • {grado}° "{paralelo}"
        </p>

        <div className={styles.profesor}>
          <div className={styles.avatar}>
            {profesor?.nombre?.charAt(0) || "?"}
          </div>
          <div className={styles.profesorInfo}>
            <span className={styles.profesorLabel}>Profesor</span>
            <span className={styles.profesorNombre}>
              {profesor?.nombre || "Sin asignar"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        {onVer && (
          <button
            className={`${styles.btnIcon} ${styles.info}`}
            onClick={() => navigate(`/admin-colegio/curso/${id}/${onVer}`)}
            title="Ver detalle"
          >
            <BsEye />
          </button>
        )}
        {onEditar && (
          <button
            className={`${styles.btnIcon} ${styles.edit}`}
            onClick={() => navigate(`/admin-colegio/curso/${id}/${onEditar}`)}
            title="Editar"
          >
            <BsPencil />
          </button>
        )}
        {onEliminar && (
          <button
            className={`${styles.btnIcon} ${styles.delete}`}
            onClick={onEliminar}
            title="Eliminar"
          >
            <BsTrash />
          </button>
        )}
      </div>
    </div>
  );
}

export default CardCurso;
