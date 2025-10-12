import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Child() {
  const { user } = useContext(UserContext); //  Access data directly from context
  return <h3>Hello, {user}!</h3>;
}