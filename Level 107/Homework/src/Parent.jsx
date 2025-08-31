// src/components/Parent.jsx
import React from 'react';
import Child from './Child'; // import Child component

function Parent() {
  return (
    <div>
      {/* Render Child twice */}
      <Child />
      <Child />
    </div>
  );
}

export default Parent;
