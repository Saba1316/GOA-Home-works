import React from "react";
import { UserProvider } from "./UserContext";
import WrapperComponent from "./WrapperComponent";
import Child from "./Child";

export default function App() {
  return (
    <UserProvider>
      <WrapperComponent>
        <h2>Context API Example</h2>
        <Child />
      </WrapperComponent>
    </UserProvider>
  );
}
