import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React from 'react';
import useToggle from './useToggle';
import './App.css'; 

function App() {
  const { color, changeColor } = useToggle();

  return (
    <div className="app-container">
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('green')}>Green</button>
      <button onClick={() => changeColor('yellow')}>Yellow</button>

      <div className="color-box" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default App;