// Test how bubbling & capturing works


// Event Capturing Phase
document.getElementById('parent').addEventListener('click', function(event) {
    console.log('Capturing - Parent Div');
}, true); // true enables capturing

document.getElementById('child').addEventListener('click', function(event) {
    console.log('Capturing - Button');
}, true); // true enables capturing

// Event Bubbling Phase
document.getElementById('parent').addEventListener('click', function(event) {
    console.log('Bubbling - Parent Div');
}); // default is bubbling

document.getElementById('child').addEventListener('click', function(event) {
    console.log('Bubbling - Button');
}); // default is bubbling