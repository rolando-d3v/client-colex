// hooks/useUIPreferences.js
import { useState } from 'react';

const UI_KEY = 'ui:preferences';

const defaultPreferences = {
  openSide: true,
  cursoView: 'lista',
};

function useUIPreferences() {
  const [preferences, setPreferences] = useState(() => {
    try {
      const stored = localStorage.getItem(UI_KEY);
      if (!stored) return defaultPreferences;

      // Merge para no perder nuevas keys si agregas más preferencias en el futuro
      return { ...defaultPreferences, ...JSON.parse(stored) };
    } catch {
      return defaultPreferences;
    }
  });

  const updatePreference = (key, value) => {
    setPreferences((prev) => {
      const updated = { ...prev, [key]: value };
      localStorage.setItem(UI_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  // Para actualizar varias keys a la vez
  const updatePreferences = (newPrefs) => {
    setPreferences((prev) => {
      const updated = { ...prev, ...newPrefs };
      localStorage.setItem(UI_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetPreferences = () => {
    localStorage.removeItem(UI_KEY);
    setPreferences(defaultPreferences);
  };

  return { preferences, updatePreference, updatePreferences, resetPreferences };
}

export default useUIPreferences;