import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [user, setUser] = useState(null);
  const [authType, setAuthType] = useState("login");

  const handleAuth = (formData) => {
    // აქ შეიძლებოდა რეალური API, მაგრამ ტესტისთვის პირდაპირ ვქმნით ობიექტს
    if (authType === "login") {
      // მაგალითად login-ის შემოწმება
      if (formData.username === "test" && formData.password === "1234") {
        setUser({ username: formData.username });
      } else {
        alert("არასწორი მონაცემები!");
      }
    } else {
      // რეგისტრაცია
      alert("რეგისტრაცია წარმატებით დასრულდა!");
      setAuthType("login");
    }
  };

  if (user) {
    return <UserProfile user={user} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <AuthForm type={authType} onAuth={handleAuth} />
      <button
        style={{ marginTop: "10px" }}
        onClick={() => setAuthType(authType === "login" ? "register" : "login")}
      >
        {authType === "login" ? "რეგისტრაციაზე გადასვლა" : "ავტორიზაციაზე დაბრუნება"}
      </button>
    </div>
  );
}
