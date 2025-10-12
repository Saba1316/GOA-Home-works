import React, { createContext, useState } from "react";

// Context-ის შექმნა
export const UserContext = createContext();

// Provider კომპონენტი
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Saba Giorgadze",
    age: 16,
    location: "Tbilisi"
  });

  const [theme, setTheme] = useState("light");

  // გაზიარებული მონაცემები ობიექტის სახით
  const sharedData = {
    user,
    theme,
    setTheme,
    setUser,
  };

  return (
    <UserContext.Provider value={sharedData}>
      {children}
    </UserContext.Provider>
  );
};
