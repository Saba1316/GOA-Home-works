// Test the submit event again


// Get the form element
const form = document.getElementById('myForm');

// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // You can test logging here
    console.log('Form submitted!');
    
    // You can also get form data if needed
    const name = document.getElementById('name').value;
    console.log('Name:', name);
});
