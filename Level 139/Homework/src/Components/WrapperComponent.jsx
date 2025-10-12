import React from "react";

export default function WrapperComponent({ children }) {
  // A simple wrapper for layout or style
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px" }}>
      {children}
    </div>
  );
}