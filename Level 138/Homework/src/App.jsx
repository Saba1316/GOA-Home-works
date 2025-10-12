import React from "react";
import { UserProvider } from "./UserContext";
import Profile from "./Profile";
import Settings from "./Settings";

export default function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <h1>Context API Example</h1>
        <Profile />
        <Settings />
      </div>
    </UserProvider>
  );
}