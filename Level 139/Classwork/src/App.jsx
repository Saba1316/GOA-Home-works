import { useContext } from "react";
import { ThemeContext } from "./ContextProvider";
import Toggle from "./Toggle";
import "./App.css";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <Toggle />
    </div>
  );
}
