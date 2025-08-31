import React from "react";

export default function UserProfile({ user }) {
  return (
    <div>
      <h2>მოგესალმები, {user.username}!</h2>
      <p>თქვენ წარმატებით გაიარეთ ავტორიზაცია.</p>
    </div>
  );
}
