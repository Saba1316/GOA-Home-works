import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';

function App() {
  const handleClick = () => {
    const name = prompt("Please eneter your name:");
    if (name) {
      alert("Your name is : " + name);
    } else {
      alert("No name was entered.");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;