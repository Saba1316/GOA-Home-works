import { useState } from 'react'
import AnotherComponent from './assets/Components/AnotherComponent';
import Parent from './assets/Components/Parent';


 export const MyFirstContext = createContext();

function App() {
  const myName = "Saba";


  return (
    <div>
      <MyFirstContext.Provider value = {myName}>
        <Parent />
      </MyFirstContext.Provider>

      <AnotherComponent />

    </div>
  )
}
  

export default App;