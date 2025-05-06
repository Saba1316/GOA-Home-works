const form = document.getElementById('userForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get user input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;

      const person = {
        name: name,
        email: email,
        age: age
      };

      // Find the next available key: person1, person2, ...
      let index = 1;
      while (localStorage.getItem(`person${index}`)) {
        index++;
      }

      // Store in localStorage
      localStorage.setItem(`person${index}`, JSON.stringify(person));
      alert(`User saved as person${index}`);

      // Reset the form
      form.reset();
    });