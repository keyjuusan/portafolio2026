import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function BtnTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme == "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
