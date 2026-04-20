import styles from './registrarCurso.module.css'
import { useState } from 'react'
import { BsBook, BsPeople, BsCalendar3, BsTextParagraph } from 'react-icons/bs'

function RegistrarColegio() {
  const [formData, setFormData] = useState({
    nombre: '',
    nivel: '',
    grado: '',
    paralelo: '',
    profesor: '',
    descripcion: '',
    estado: 'activo'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del curso:', formData)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconHeader}>
            <BsBook size={24} />
          </div>
          <div>
            <h2 className={styles.title}>Nuevo Curso</h2>
            <p className={styles.subtitle}>Completa los datos del curso</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>
                <BsBook /> Nombre del curso
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Matemáticas"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.rowTwo}>
            <div className={styles.field}>
              <label className={styles.label}>
                <BsCalendar3 /> Nivel
              </label>
              <select
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Seleccionar nivel</option>
                <option value="primaria">Primaria</option>
                <option value="secundaria">Secundaria</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Grado</label>
              <select
                name="grado"
                value={formData.grado}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Seleccionar grado</option>
                <option value="1">1°</option>
                <option value="2">2°</option>
                <option value="3">3°</option>
                <option value="4">4°</option>
                <option value="5">5°</option>
                <option value="6">6°</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Paralelo</label>
              <select
                name="paralelo"
                value={formData.paralelo}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Seleccionar</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>
                <BsPeople /> Profesor asignado
              </label>
              <select
                name="profesor"
                value={formData.profesor}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Seleccionar profesor</option>
                <option value="1">Juan Pérez</option>
                <option value="2">María García</option>
                <option value="3">Roberto Torres</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>
                <BsTextParagraph /> Descripción
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Descripción opcional del curso..."
                className={styles.textarea}
                rows={3}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Estado</label>
              <div className={styles.toggleGroup}>
                <button
                  type="button"
                  className={`${styles.toggle} ${formData.estado === 'activo' ? styles.active : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, estado: 'activo' }))}
                >
                  Activo
                </button>
                <button
                  type="button"
                  className={`${styles.toggle} ${formData.estado === 'inactivo' ? styles.active : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, estado: 'inactivo' }))}
                >
                  Inactivo
                </button>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnCancel}>
              Cancelar
            </button>
            <button type="submit" className={styles.btnSubmit}>
              Crear Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrarColegio