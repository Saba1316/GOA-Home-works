import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Settings() {
  const { theme, setTheme } = useContext(UserContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Settings</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
