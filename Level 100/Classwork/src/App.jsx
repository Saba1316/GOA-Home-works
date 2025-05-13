import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals.js';

function App() {
  const [fact, setFact] = useState('');

  const displayFact = (e) => {
    const animal = e.target.alt;
    const animalFacts = animals[animal].facts;
    const randomIndex = Math.floor(Math.random() * animalFacts.length);
    setFact(animalFacts[randomIndex]);
  };

  const title = "Click an animal for a fun fact";

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <div className="animals">
        {Object.keys(animals).map((animal) => (
          <img
            key={animal}
            src={animals[animal].image}
            alt={animal}
            aria-label={animal}
            role="button"
            onClick={displayFact}
            style={{ width: '200px', margin: '10px', cursor: 'pointer' }}
          />
        ))}
      </div>
      <p id="fact" style={{ fontSize: '1.2rem', marginTop: '20px' }}>{fact}</p>
    </div>
  );
}

export default App;