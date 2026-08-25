import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window == undefined) return "dark";
  const temaGuardado = localStorage.getItem("theme");
  if (temaGuardado == "dark" || temaGuardado == "light") return temaGuardado;
  const oscuroPorDefecto = window.matchMedia("(prefers-color-scheme: dark)");
  const systemDefaultTheme = oscuroPorDefecto ? "dark" : "light";
  return systemDefaultTheme;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme());

  function toggleTheme() {
    const newTheme = theme == "dark" ? "light" : "dark"
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme == "dark");
  }, [theme]);

  return { theme, toggleTheme };
}
