// Explanation of how the useEffect hook



// What is useEffect?
// useEffect is a React Hook that lets you perform side effects in function components.
// Side effects include things like:
// Fetching data
// Changing the document title
// Setting up subscriptions or timers
// Adding/removing event listeners
// When your component renders:
// React builds the Virtual DOM.
// Then it commits changes to the real DOM.
// After the commit phase, React runs your useEffect functions.
// This is why effects run after render, not during it — so they don’t block the UI or interfere with rendering logic.
// A replacement for side-effect lifecycle methods
// Reactive to dependency changes
// Executed after the render, during the commit phase
// Automatically cleaned up to avoid stale data or memory leaks