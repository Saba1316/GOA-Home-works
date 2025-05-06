function validateForm() {
    let isValid = true;

    
    document.querySelectorAll('.error').forEach(function(element) {
        element.classList.remove('error');
    });

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    
    if (!name) {
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    
    if (!email) {
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    
    if (!password) {
        document.getElementById('password').classList.add('error');
        isValid = false;
    }

    
    if (!gender) {
        document.getElementById('gender').classList.add('error');
        isValid = false;
    }

    
    if (!country) {
        document.getElementById('country').classList.add('error');
        isValid = false;
    }

    
    if (!terms) {
        alert('You must agree to the Terms & Conditions.');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
    }

    return isValid; 
}