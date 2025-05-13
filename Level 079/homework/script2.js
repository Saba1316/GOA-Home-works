// Use 3 examples of the spread operator

// Example 1

const numbers = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const result = sum(...numbers); 
console.log(result); // 15

// Example 2

const user = { name: 'Saba', address: { city: 'Tbilisi', zip: '10100' } };
const updatedUser = { ...user, address: { ...user.address, city: 'Tbilisi' } };

console.log(updatedUser); 
// { name: 'Saba', address: { city: 'Tbilisi', zip: '10100' } }

// Example 3

function Button({ label, color }) {
    return <button style={{ backgroundColor: color }}>{label}</button>;
  }
  
  const buttonProps = { label: 'Click Me', color: 'blue' };
  
  // Using the spread operator to pass props
  <Button {...buttonProps} />
  