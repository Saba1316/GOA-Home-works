function Home({ users, curUser, setCurUser }) {
  const handleLogout = () => {
    setCurUser(null);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Log Out</button>

      <section>
        <h3>Current User Info</h3>
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p><strong>Username:</strong> {curUser.username}</p>
          <p><strong>Email:</strong> {curUser.email}</p>
          <p><strong>Role:</strong> {curUser.role}</p>
        </div>
      </section>

      {curUser.role === "admin" && (
        <section>
          <h3>Other Users Info</h3>
          {users
            .filter((u) => u.email !== curUser.email)
            .map((u, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <p><strong>Username:</strong> {u.username}</p>
                <p><strong>Email:</strong> {u.email}</p>
                <p><strong>Role:</strong> {u.role}</p>
              </div>
            ))}
        </section>
      )}
    </div>
  );
}

export default Home;