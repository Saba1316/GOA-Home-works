// Modularity means splitting your code into small, manageable, and reusable parts (modules).
// In React, this means creating separate components for different pieces of your UI.

// Example:
// Instead of writing everything in App.js, we create separate files:
// - Header.jsx
// - Footer.jsx
// - ProductCard.jsx

// This helps:
// - Keep code organized and readable
// - Make components reusable across different parts of the app
// - Easier to debug and test

// When rendering a list of elements using .map(), React requires a 'key' prop for each item.
// 'key' helps React identify which items changed, were added, or removed.

const names = ["Anna", "Ben", "Cathy"];

return (
  <ul>
    {names.map((name, index) => (
      // Always use a unique key if possible (e.g. id from data)
      <li key={index}>{name}</li>
    ))}
  </ul>
);