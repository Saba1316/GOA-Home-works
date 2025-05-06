// Ask the customer through the confirm function whether he is an adult, 
// store the value returned by the function in a variable, and if the customer clicks the "OK" button, print "You are Adult" in the console, otherwise "You are kid".

// Using the confirm function to check the user's age
let isAdult = confirm("Are you an adult?");

// Print the response to the console
if (isAdult) {
    console.log("You are Adult");
} else {
    console.log("You are kid");
}
