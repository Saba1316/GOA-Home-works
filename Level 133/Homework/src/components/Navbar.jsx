import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "blue",
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}
