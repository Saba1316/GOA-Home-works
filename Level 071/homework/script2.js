// Watch this video, learn the Key Events, and then do the same as in class, but with the movement through the keyboard


// https://www.youtube.com/watch?v=q32skvBgxo4

const box = document.getElementById("box");

let y2 = 0;
let x2 = 0;
let move = 10;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowRight":
                x2 += move;
                break;
            case "ArrowDown":
                y2 += move;
                break;
            case "ArrowLeft":
                x2 -= move;
                break;
            case "ArrowUp":
                y2 -= move;
                break;
        }

        box.style.left = `${x2}px`;
        box.style.top = `${y2}px`;
    }
});