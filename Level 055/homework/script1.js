// Create a form where you have input type text, email, password and submit. Get the form alone through getElementById in the js file. 
// Add an addEventListener to the form and listen to the event: 'submit'. After submission, the code should output the value of all inputs.


const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
});
