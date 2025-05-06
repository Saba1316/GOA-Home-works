// Make an animation like we did in class

const ins = document.getElementById('ins');

let x = 0;
let y = 0;

const moveRight = setInterval(function(){
    x++;
    ins.style.left = `${x}px`;
}, 100)