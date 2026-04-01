import { useState } from "react";
import { FiCpu, FiSun, FiMoon } from "react-icons/fi";
import styles from "./toggle.module.css";

const THEMES = [
  { key: "light", icon: FiSun, label: "Light" },
  { key: "dark", icon: FiMoon, label: "Dark" },
  { key: "system", icon: FiCpu, label: "Sistema" },
];

function applyTheme(theme) {
  const body = document.querySelector("body");
  const html = document.querySelector("html");

  if (theme === "dark") {
    body.setAttribute("data-theme", "dark");
    html.setAttribute("data-theme", "dark");
  } else if (theme === "light") {
    body.setAttribute("data-theme", "light");
    html.setAttribute("data-theme", "light");
  } else {
    body.removeAttribute("data-theme");
    html.removeAttribute("data-theme");
  }

  localStorage.setItem("theme-is", theme);
}

export default function ToggleTheme() {
  const stored = localStorage.getItem("theme-is") || "system";
  const [selected, setSelected] = useState(stored);

  // Apply on mount
  if (stored === "dark" || stored === "light") {
    applyTheme(stored);
  }

  const handleSelect = (themeKey) => {
    setSelected(themeKey);
    applyTheme(themeKey);
  };

  // Find which icon corresponds to the active theme
  const ActiveIcon =
    THEMES.find((t) => t.key === selected)?.icon || FiCpu;

  return (
    <div className={styles.wrapper}>
      {/* Active icon — always visible */}
      <button className={styles.activeBtn} aria-label="Cambiar tema">
        <ActiveIcon />
      </button>

      {/* Expandable icon list — visible on hover */}
      <div className={styles.options}>
        {THEMES.map((t, i) => {
          const Icon = t.icon;
          const isActive = t.key === selected;
          return (
            <button
              key={t.key}
              className={`${styles.optionBtn} ${isActive ? styles.optionActive : ""}`}
              onClick={() => handleSelect(t.key)}
              aria-label={t.label}
              style={{ transitionDelay: `${i * 45}ms` }}
              title={t.label}
            >
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
}
