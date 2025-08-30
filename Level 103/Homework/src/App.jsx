import React from 'react';

function Contact() {
  const [authorized, setAuthorized] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'swordfish') {
      setAuthorized(true);
    } else {
      alert('Incorrect password!');
    }
    setPassword('');
  };

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );

  const contactInfo = (
    <div>
      <p>Email: sabasaba@gmail.com</p>
      <p>Phone: 56893423423</p>
    </div>
  );

  return (
    <div>
      <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact