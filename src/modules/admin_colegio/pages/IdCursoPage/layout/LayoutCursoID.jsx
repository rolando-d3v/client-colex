import { useParams } from "react-router";
import styles from './layoutCurso.module.css'

function LayoutCursoID() {


  const { id, modo } = useParams();

  console.log(id);   // "1"
  console.log(modo); // "editor"


  return (
    <div className={styles.container}>
        <h4>curso</h4>
        <p>curso</p>
    </div>
  )
}

export default LayoutCursoID