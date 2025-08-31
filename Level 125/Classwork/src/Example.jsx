import React from "react";
import "./BoxStyles.css"; // External CSS
import "../index.css";    // Global CSS

const ThreeBoxes = () => {
  const internalStyle = {
    backgroundColor: "#fef3c7",
    padding: "20px",
    margin: "10px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    color: "#92400e"
  };

  return (
    <div>
      {/* Internal CSS */}
      <div style={internalStyle}>
        <p>This is the first paragraph (Internal CSS).</p>
        <p>This is the second paragraph (Internal CSS).</p>
      </div>

      {/* External CSS */}
      <div className="external-box">
        <p>This is the first paragraph (External CSS).</p>
        <p>This is the second paragraph (External CSS).</p>
      </div>

      {/* Global index.css CSS */}
      <div className="index-box">
        <p>This is the first paragraph (index.css).</p>
        <p>This is the second paragraph (index.css).</p>
      </div>
    </div>
  );
};

export default ThreeBoxes;
