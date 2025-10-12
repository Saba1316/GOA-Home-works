import { createContext, useState } from "react";


export const ThemeContext = createContext();

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
