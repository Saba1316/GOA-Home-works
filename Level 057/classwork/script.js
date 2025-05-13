document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const termsAccepted = document.getElementById('terms').checked;

    if (!termsAccepted) {
        alert('Please agree to the site rules');
        return;
    }

    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
    console.log('TermsAccepted:', termsAccepted);

    
    alert('Registration was successful');
});