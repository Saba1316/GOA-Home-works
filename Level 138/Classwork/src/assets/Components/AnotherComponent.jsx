import React, { useContext } from "react";
import { MyFirstContext } from "./App";

function AnotherComponent() {
  const name = useContext(MyFirstContext); // 2️⃣ Provider-ის გარეთ არის, მონაცემი არაა ხელმისაწვდომი

  return (
    <div>
      <p>Another Component: {name}</p>
      {/* 
        აქ Context არ მუშაობს, რადგან AnotherComponent არის Provider-ის გარეთ.
        ამიტომ useContext(MyFirstContext) undefined დაბრუნდება.
      */}
    </div>
  );
}

export default AnotherComponent;