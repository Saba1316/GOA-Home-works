const form = document.getElementById('userForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get user input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;

      const user = [name, email, age]; // Store as a list (array)

      // Get current users list from localStorage or initialize it
      let users = JSON.parse(localStorage.getItem('users')) || [];

      // Add new user to the list
      users.push(user);

      // Save updated list back to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      alert('User added successfully!');
      form.reset();
    });