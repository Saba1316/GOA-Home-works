import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { useState, useEffect } from "react";

function GreetingTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      document.title = `Hello, ${name}!`;
    } else {
      document.title = "Welcome!";
    }
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;