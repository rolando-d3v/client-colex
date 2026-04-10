import styles from './listaCursos.module.css'
import { BsBook, BsPencil, BsTrash, BsEye } from 'react-icons/bs'

function ListaCursos({
  cursos = [],
  onVer,
  onEditar,
  onEliminar
}) {
  return (
    <div className={styles.container}>
      {/* Encabezado de la tabla */}
      <div className={styles.tableHeader}>
        <span className={styles.colCurso}>Curso</span>
        <span className={styles.colNivel}>Nivel</span>
        <span className={styles.colGrado}>Grado</span>
        <span className={styles.colProfesor}>Profesor</span>
        <span className={styles.colEstado}>Estado</span>
        <span className={styles.colAcciones}>Acciones</span>
      </div>

      {/* Filas de la tabla */}
      {cursos.map((curso, index) => (
        <div key={index} className={styles.tableRow}>
          <div className={styles.colCurso}>
            <div className={styles.cursoInfo}>
              <div className={styles.iconWrapper}>
                <BsBook size={16} />
              </div>
              <span className={styles.cursoNombre}>{curso.nombre}</span>
            </div>
          </div>

          <div className={styles.colNivel}>
            <span className={styles.tag}>{curso.nivel}</span>
          </div>

          <div className={styles.colGrado}>
            <span>{curso.grado}° "{curso.paralelo}"</span>
          </div>

          <div className={styles.colProfesor}>
            <div className={styles.profesorInfo}>
              <div className={styles.avatar}>
                {curso.profesor?.nombre?.charAt(0) || '?'}
              </div>
              <span>{curso.profesor?.nombre || 'Sin asignar'}</span>
            </div>
          </div>

          <div className={styles.colEstado}>
            <span className={`${styles.badge} ${styles[curso.estado]}`}>
              {curso.estado === 'activo' ? 'Activo' : 'Inactivo'}
            </span>
          </div>

          <div className={styles.colAcciones}>
            {onVer && (
              <button
                className={styles.btnIcon}
                onClick={() => onVer(curso)}
                title="Ver detalle"
              >
                <BsEye />
              </button>
            )}
            {onEditar && (
              <button
                className={`${styles.btnIcon} ${styles.edit}`}
                onClick={() => onEditar(curso)}
                title="Editar"
              >
                <BsPencil />
              </button>
            )}
            {onEliminar && (
              <button
                className={`${styles.btnIcon} ${styles.delete}`}
                onClick={() => onEliminar(curso)}
                title="Eliminar"
              >
                <BsTrash />
              </button>
            )}
          </div>
        </div>
      ))}

      {cursos.length === 0 && (
        <div className={styles.empty}>
          <BsBook size={32} />
          <p>No se encontraron cursos</p>
        </div>
      )}
    </div>
  )
}

export default ListaCursos
