document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Reset any previous errors
    let isValid = true;
    let errorMessage = '';

    // Reset red borders
    document.querySelectorAll('input, select').forEach(function(element) {
      element.classList.remove('error');
    });

    // Check for empty fields and redden borders if needed
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let gender = document.getElementById("gender");
    let country = document.getElementById("country");
    let terms = document.getElementById("terms");

    if (!name.value) {
      name.classList.add('error');
      isValid = false;
    }
    if (!email.value) {
      email.classList.add('error');
      isValid = false;
    }
    if (!password.value) {
      password.classList.add('error');
      isValid = false;
    }
    if (!gender.value) {
      gender.classList.add('error');
      isValid = false;
    }
    if (!country.value) {
      country.classList.add('error');
      isValid = false;
    }
    if (!terms.checked) {
      isValid = false;
    }

    // Show error message if form is invalid
    if (!isValid) {
      document.getElementById("error-message").classList.remove('hidden');
    } else {
      document.getElementById("error-message").classList.add('hidden');
      alert("Registration successful!");
      // You can add form submission code here if needed
      // e.g., this.submit();
    }
  });