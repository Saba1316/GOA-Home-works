// Consider this code and make a counter-clockwise movement in this manner. 

let left = 0;
let y = 0;
let direction = "right"

const moveRight = setInterval(function(){
    if(direction == "right"){
        left++;
        if(left == 300){
            direction = "bottom"
        }
    } else if(direction == "bottom"){
        y++;
        if(y == 300){
            direction = "left";
        }
    } else if(direction == "left"){
        left--;
        if(left == 0){
            direction = "top"
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            clearInterval(moveRight);
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);


// This code creates an animation that moves an element with the ID child-container in a square path with clockwise movement, changing its direction after reaching each edge of the container. Let's break it down:

// Variables:
// let left = 0; — This variable controls the horizontal position of the element. It starts at 0 (leftmost position).
// let y = 0; — This variable controls the vertical position of the element. It starts at 0 (topmost position).
// let direction = "right"; — This keeps track of the current direction of movement. Initially, the direction is "right" (the element will move horizontally to the right).
// setInterval function:
// Purpose: The setInterval function repeatedly executes a block of code every 10 milliseconds. This block of code updates the element's position on the screen and changes the direction when necessary.
// Movement logic (based on the direction variable):
// Moving Right (if direction is "right"):

// left++ increases the left position by 1 on each iteration, making the element move rightward.
// if (left == 300) checks if the element has moved 300 pixels to the right. When this happens, the direction changes to "bottom", meaning the element will start moving downward next.
// Moving Down (if direction is "bottom"):

// y++ increases the y position by 1, making the element move down.
// if (y == 300) checks if the element has moved 300 pixels down. When this happens, the direction changes to "left", so the element will move left next.
// Moving Left (if direction is "left"):

// left-- decreases the left position by 1, making the element move leftward.
// if (left == 0) checks if the element has moved back to the leftmost position. When this happens, the direction changes to "top", and the element will start moving upward next.
// Moving Up (if direction is "top"):

// y-- decreases the y position by 1, making the element move upward.
// if (y == 0 && left == 0) checks if the element has moved back to the top-left corner (both left == 0 and y == 0). If this is true, the interval is cleared using clearInterval(moveRight), which stops the animation.
// Updating the element's position:
// child.style.left = left + 'px'; — This updates the left CSS property of the element, positioning it horizontally based on the left variable.
// child.style.top = y + 'px'; — This updates the top CSS property of the element, positioning it vertically based on the y variable.
// Summary:
// The element starts at (0, 0) and moves to the right, then down, then left, and then up, forming a square path.
// The movement stops when it reaches the starting point (0, 0) again after completing the square.
// This entire movement is executed repeatedly with a 10-millisecond delay between each step, creating an animation effect.