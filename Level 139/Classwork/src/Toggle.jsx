import { useContext } from "react";
import { ThemeContext } from "./ContextProvider";

export default function Toggle() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => changeTheme("light")}>Light</button>
      <button onClick={() => changeTheme("dark")}>Dark</button>
    </div>
  );
}
