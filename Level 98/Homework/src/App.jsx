function App() {
  const name = "Saba";
  const num1 = 5;
  const num2 = 5;
  const sum = num1 + num2;

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{num1} + {num2} = {sum}</p>
    </div>
  );
}

export default App;
