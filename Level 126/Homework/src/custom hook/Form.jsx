import React from "react";
import useForm from "../hooks/useForm";

export default function AuthForm({ type, onAuth }) {
  const { values, handleChange, handleSubmit } = useForm(
    { username: "", password: "" },
    onAuth
  );

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{type === "login" ? "ავტორიზაცია" : "რეგისტრაცია"}</h2>
      <input
        type="text"
        name="username"
        placeholder="მომხმარებელი"
        value={values.username}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="პაროლი"
        value={values.password}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        {type === "login" ? "შესვლა" : "რეგისტრაცია"}
      </button>
    </form>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", gap: "10px", width: "250px" },
  input: { padding: "8px" },
  button: { padding: "8px", background: "#4cafef", border: "none", cursor: "pointer" }
};
