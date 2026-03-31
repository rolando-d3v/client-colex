import { FiCpu, FiSun, FiMoon } from "react-icons/fi";
import styles from "./toggle.module.css";

export default function ToggleTheme() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme-is", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme-is", "light");
  };
  const setLSystem = () => {
    document.querySelector("body").removeAttribute("data-theme");
    document.querySelector("html").removeAttribute("data-theme");
    localStorage.setItem("theme-is", "system");
  };

  const selectedTheme = localStorage.getItem("theme-is");

  if (selectedTheme === "dark") {
    setDarkMode();
  }
  if (selectedTheme === "light") {
    setLightMode();
  }

  const obtenerValue = (e) => {
    // console.log(e.target.value);

    if (e.target.value === "dark") {
      setDarkMode();
    }

    if (e.target.value === "light") {
      setLightMode();
    }

    if (e.target.value === "system") {
      setLSystem();
    }
  };

  return (
    <div className={styles.toggle}   >
      <label className=""  >
        <select
         className="" 
          style={{ width: 105, height: 30 }}
          onChange={obtenerValue}
          defaultValue={localStorage.getItem("theme-is")}
        >
          <option   value="system"> 💻 Sistema</option>
          <option   value="light"> ☀️ Light</option>
          <option   value="dark"> ☪️ Dark</option>
        </select>
      </label>

      <div>
           <button
                  className={styles.iconBtn}
                  // onClick={() => dispatch(toggleDarkMode())}
                  // title={isDarkMode ? "Modo claro" : "Modo oscuro"}
                >
                  
                  
                  
                  
                  {/* {isDarkMode ? <FiSun /> : <FiMoon />} */}
                
                
                </button>
      </div>
    </div>
  );
}
