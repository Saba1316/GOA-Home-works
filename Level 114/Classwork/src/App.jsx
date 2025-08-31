import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React, { useState } from 'react';

function UserForm() {
  // useState-ის მეშვეობით ვქმნით ერთიან მდგომარეობას (ობიექტს), სადაც გვექნება ორი ველი: firstname და lastname
  const [user, setUser] = useState({
    firstname: '',
    lastname: ''
  });

  // ეს ფუნქცია გამოიძახება ყოველ ჯერზე, როცა რომელიმე input შეიცვლება
  const handleChange = (e) => {
    const { name, value } = e.target; // ვიღებთ input-ის name-სა და მნიშვნელობას

    // განვაახლებთ user ობიექტს ისე, რომ მხოლოდ ცვლადი ველი შეიცვალოს
    setUser(prevUser => ({
      ...prevUser,       // ვტოვებთ ყველა სხვა ველს უცვლელად
      [name]: value      // ვანახლებთ კონკრეტულად იმ ველს, რომელიც შეიცვალა (name-ის მიხედვით)
    }));
  };

  return (
    <div>
      {/* input value სახელისთვის. name="firstname" ემთხვევა user ობიექტის key-ს */}
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleChange}
        placeholder="Enter Firstname"
      />

      {/* input value გვარისთვის */}
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleChange}
        placeholder="Enter Lastname"
      />

      {/* ქვემოთ ავტომატურად გამოჩნდება ჩაწერილი მონაცემები */}
      <div>
        <p>Firstname: {user.firstname || ""}</p>
        <p>Lastname: {user.lastname || ""}</p>
      </div>
    </div>
  );
}

export default UserForm;
