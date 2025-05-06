const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direction = "bottom";

const moveRight = setInterval(function(){
    if(direction == "right"){
        left++;
        if(left == 300){
            direction = "top";
        }
    } else if(direction == "bottom"){
        y++;
        if(y == 300){
            direction = "right";
        }
    } else if(direction == "left"){
        left--;
        if(y == 0 && left == 0){
            clearInterval(moveRight);
        }
    } else if (direction == "top"){
        y--;
        if(y == 0){
            direction = "left";
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 5);