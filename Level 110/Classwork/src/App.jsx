import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React from "react";

// Parent component
const Parent = ({ onTouch, children }) => {
  return (
    <div>
      <button onClick={onTouch}>Click the button</button>
      <div>
        {children}
      </div>
    </div>
  );
};

// Custom child component
const CustomChild = () => {
  return <p>This is the CustomChild component.</p>;
};

// App component
const App = () => {
  // Touch/click event handler
  const handleTouch = () => {
    console.log("Button was clicked!");
    alert("Button was clicked!");
  };

  return (
    <div>
      <h1>Main Application</h1>
      <Parent onTouch={handleTouch}>
        <p>This is a child element.</p>
        <div>Another child element</div>
        <CustomChild />
      </Parent>
    </div>
  );
};

export default App;
