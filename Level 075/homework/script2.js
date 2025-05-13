// Make 3 && operator examples

// Example 1:

const age = 25;
const isMember = true;
const accessGranted = (age >= 18 && isMember) ? 'Access granted' : 'Access denied';
console.log(accessGranted);  // Output: Access granted

// Example 2:

const isLoggedIn = true;
const hasProfilePicture = false;
const message = (isLoggedIn && hasProfilePicture) ? 'Profile looks great!' : 'Please upload a profile picture.';
console.log(message);  // Output: Please upload a profile picture.

// Example 3:

const isValidUser = true;
const isSubscribed = true;

isValidUser && isSubscribed && console.log('Welcome to the premium content!');  // Output: Welcome to the premium content!