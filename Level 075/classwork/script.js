// Get the form element
const form = document.getElementById('userForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting the traditional way
  event.preventDefault();

  // Get values from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Log the values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
});