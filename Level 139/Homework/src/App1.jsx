// What is a Wrapper Component

// A wrapper component is a React component that wraps around other components.
// It usually applies shared layout, style, or context logic to its child elements.

// WrapperComponent.jsx
import React from "react";

export default function WrapperComponent({ children }) {
  // 👉 This component "wraps" other components
  // and can apply common styles or structure to them.
  return (
    <div style={{ border: "2px solid gray", padding: "15px", borderRadius: "10px" }}>
      {/* 👇 This is where child components will appear */}
      {children}
    </div>
  );
}
