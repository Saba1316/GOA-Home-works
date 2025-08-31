
import React from "react";

function FormPresentation({ name, password, onNameChange, onPasswordChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={onPasswordChange}
      />
      <div>
        <p>Name: {name}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
}

export default FormPresentation;