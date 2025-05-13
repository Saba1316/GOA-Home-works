// Import React and the useState hook
import React, { useState } from 'react';

// Import createRoot for rendering React components to the DOM
import { createRoot } from 'react-dom/client';

// Import an object containing animal data (images and facts)
import { animals } from './animals.js';

// Main functional component
function App() {
  // useState hook to store and update the displayed fun fact
  const [fact, setFact] = useState('');

  // Function to handle clicks on animal images
  const displayFact = (e) => {
    const animal = e.target.alt; // Get the name of the clicked animal from the alt attribute
    const animalFacts = animals[animal].facts; // Get the list of facts for that animal
    const randomIndex = Math.floor(Math.random() * animalFacts.length); // Pick a random index
    setFact(animalFacts[randomIndex]); // Update the fact state with a random fact
  };

  // Title to display at the top of the page
  const title = "Click an animal for a fun fact";

  // Return JSX to render the UI
  return (
    <div style={{ textAlign: 'center' }}> {/* Center all content */}
      <h1>{title}</h1> {/* Display title */}

      {/* Container for all animal images */}
      <div className="animals">
        {
          // Loop through all animals and create an <img> for each one
          Object.keys(animals).map((animal) => (
            <img
              key={animal} // Unique key for React rendering
              src={animals[animal].image} // Image URL
              alt={animal} // Used to identify which animal was clicked
              aria-label={animal} // Accessibility label
              role="button" // Indicates the image is clickable
              onClick={displayFact} // Event handler for clicks
              style={{
                width: '200px',
                margin: '10px',
                cursor: 'pointer'
              }} // Styling for the image
            />
          ))
        }
      </div>

      {/* Display the selected fun fact */}
      <p
        id="fact"
        style={{ fontSize: '1.2rem', marginTop: '20px' }}
      >
        {fact}
      </p>
    </div>
  );
}

// Export the App component so it can be used elsewhere (e.g. in main.jsx)
export default App;
