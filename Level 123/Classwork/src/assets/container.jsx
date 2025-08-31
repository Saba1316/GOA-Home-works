import React, { useState } from "react";
import FormPresentation from "./FormPresentation";

function FormContainer() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <FormPresentation
      name={name}
      password={password}
      onNameChange={handleNameChange}
      onPasswordChange={handlePasswordChange}
    />
  );
}

export default FormContainer;