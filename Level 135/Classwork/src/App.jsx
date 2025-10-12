import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Home from "./Pages/Register";
import Home from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  const [users,setUsers] = useState([]);
  const [curUser, setCurUser] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path = "/register"
          element = {<Register users = {users} setUsers = {setUsers} />}
          />

        <Route
          path = "/login"
          element = {<Login users = {users} setCurUser={setCurUser} />}
        
        />

        <Route
          path = "/"
          element = {
            <ProtectedRoute curUser={curUser}>
              <Home users = {users} curUser={curUser} setCurUser={setCurUser} />
            </ProtectedRoute>
          }

        />
        <Route path = "*" element={<h1>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
 


export default App;