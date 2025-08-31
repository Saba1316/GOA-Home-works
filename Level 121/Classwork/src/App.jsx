
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Function that runs on click
    const handleClick = () => {
      setCount(prev => prev + 1);
    };

    // Add the event listener once
    document.addEventListener('click', handleClick);

    // Remove the listener when component is removed or re-rendered
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // [] means this runs only once when the app loads

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Click anywhere on the page.</p>
    </div>
  );
}

export default App;