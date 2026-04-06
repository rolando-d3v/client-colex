import styles from "./cursoPage.module.css";
import CardCurso from "../../components/card_curso/CardCurso";
import { useState } from "react";
import RegistrarCurso from "../../components/registrarColegio/RegistrarCurso";

function CursoColegio() {
  const [activeTab, setActiveTab] = useState("cursos");

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
  ];

  return (
    <div>
      <div className={styles.container_tabs}>
        <button
          className={`${styles.tab} ${activeTab === "cursos" ? styles.active : ""}`}
          onClick={() => setActiveTab("cursos")}
        >
          Cursos
        </button>
        <button
          className={`${styles.tab} ${activeTab === "crear" ? styles.active : ""}`}
          onClick={() => setActiveTab("crear")}
        >
          Crear curso
        </button>
      </div>

      {activeTab === "cursos" && (
        <div className={styles.container_cursos}>
          {arrayCursos.map((curso, index) => (
            <CardCurso
              key={index}
              nombre={curso.nombre}
              nivel={curso.nivel}
              grado={curso.grado}
              paralelo={curso.paralelo}
              profesor={curso.profesor}
              estado={curso.estado}
              onVer={() => {}}
              onEditar={() => {}}
              onEliminar={() => {}}
            />
          ))}
        </div>
      )}

      {activeTab === "crear" && (
        <div className={styles.crear_curso}>
          <RegistrarCurso />
        </div>
      )}
    </div>
  );
}

export default CursoColegio;
