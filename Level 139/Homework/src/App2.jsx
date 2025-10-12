// What is Prop Drilling

// Prop drilling happens when data is passed from a parent component to deeply nested child 
// components through every intermediate layer, even if those middle components don’t need the data themselves.

// PropDrillingExample.jsx
import React from "react";

function Child({ user }) {
  return <p>User: {user}</p>;
}

function Middle({ user }) {
  // 👉 Middle doesn’t use 'user' itself, but must pass it down
  return <Child user={user} />;
}

export default function Parent() {
  const user = "Saba";
  // 👉 Prop drilling: Parent → Middle → Child
  return <Middle user={user} />;
}