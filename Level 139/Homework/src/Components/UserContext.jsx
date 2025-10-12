import React, { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Wrapper (Provider)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Saba");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/*  Wraps children with context */}
      {children}
    </UserContext.Provider>
  );
};