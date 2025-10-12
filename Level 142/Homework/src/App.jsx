import React from "react";
import Child from "./Components/Child";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div>
      <h1>Error Boundary</h1>

      <ErrorBoundary>
        <Child />
        <Child />
      </ErrorBoundary>

      <ErrorBoundary>
        <Child />
      </ErrorBoundary>

      <Child />
    </div>
  );
}

export default App;