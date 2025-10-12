import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}
