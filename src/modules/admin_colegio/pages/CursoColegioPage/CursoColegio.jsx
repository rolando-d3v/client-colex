import styles from "./cursoPage.module.css";
import CardCurso from "../../components/card_curso/CardCurso";
import ListaCursos from "../../components/lista_cursos/ListaCursos";
import ModalCrearCurso from "../../components/modal_crear_curso/ModalCrearCurso";
import { useState } from "react";
import { BsPlus, BsGrid3X3Gap, BsListUl } from "react-icons/bs";
import { useCurso } from "../../hooks/useCurso";
import { useAuth } from "../../../auth/hooks/useAuth";
import useUIPreferences from "../../../../hooks/useUIPreferences";

function CursoColegio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { colegio } = useAuth();
  const { preferences, updatePreference } = useUIPreferences();

  console.log(preferences);

  const { query_curso } = useCurso(colegio?.id);

  console.log(query_curso.data);

  const arrayCursos = [
    {
      nombre: "Matemáticas",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Comunicacion",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Fisica",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Quimica",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Biologia",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Roberto Torres" },
      estado: "activo",
    },
    {
      nombre: "Programacion kotlin",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Programacion sql",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Python",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Machine learning",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Machine learning",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Machine learning",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
    {
      nombre: "Machine learning",
      nivel: "Secundaria",
      grado: 1,
      paralelo: "A",
      profesor: { nombre: "Juan Pérez" },
      estado: "activo",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ===== HEADER ===== */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h1 className={styles.pageTitle}>Administración de cursos</h1>
          <p className={styles.pageSubtitle}>
            {query_curso?.data?.length} cursos registrados
          </p>
        </div>

        <div className={styles.headerRight}>
          {/* Toggle de vista */}
          <div className={styles.viewToggle}>
            <button
              className={`${styles.viewBtn} ${preferences.cursoView === "card" ? styles.viewBtnActive : ""}`}
              onClick={() => {
                updatePreference("cursoView", "card");
                
              }}
              title="Vista tarjeta"
            >
              <BsGrid3X3Gap size={16}  className=""  />
            </button>
            <button
              className={`${styles.viewBtn} ${preferences.cursoView === "lista" ? styles.viewBtnActive : ""}`}
              onClick={() => {
                updatePreference("cursoView", "lista");
               
              }}
              title="Vista lista"
            >
              <BsListUl size={16} />
            </button>
          </div>

          {/* Botón crear curso */}
          <button
            className={styles.btnCrear}
            onClick={() => setIsModalOpen(true)}
          >
            <BsPlus size={20} />
            Crear curso
          </button>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      {preferences.cursoView === "card" ? (
        <div className={styles.container_cursos}>
          {query_curso?.data?.map((curso) => (
            <CardCurso
              key={curso.id}
              id={curso.id}
              nombre={curso.nombre}
              nivel={curso.nivel}
              grado={curso.grado}
              paralelo={curso.paralelo}
              profesor={curso.profesor}
              estado={curso.is_active}
              onVer="ver"
              onEditar="editar"
              onEliminar={() => {
                console.log("eliminar");
              }}
            />
          ))}
        </div>
      ) : (
        <ListaCursos
          cursos={arrayCursos}
          onVer="ver"
          onEditar="editar"
          onEliminar={() => {
            console.log("eliminar");
          }}
        />
      )}

      {/* ===== MODAL CREAR CURSO ===== */}
      <ModalCrearCurso
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default CursoColegio;
