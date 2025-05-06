const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let i = 0;
const images = [
    "./image1.png",
    "./image2.png",
    "./image3.png",
    "./image4.png"
];

next.addEventListener('click', () => {
    i++;
    if (i == images.length) {
        i = 0;
    }
    img.src = images[i];
});

prev.addEventListener('click', () => {
    i--;
    if (i == -1) {
        i = 3;
    }
    img.src = images[i];
});


// Variables:
// const img = document.getElementById("img");

// This line selects the image element (<img>) from the HTML using its id ("img"), and stores it in the img variable. This allows us to modify the image source dynamically in the script.
// const next = document.getElementById("next");

// This selects the "Next" button using its id ("next") and stores it in the next variable. This button will trigger the action of moving to the next image when clicked.
// const prev = document.getElementById("prev");

// This selects the "Previous" button using its id ("prev") and stores it in the prev variable. This button will trigger the action of going back to the previous image when clicked.
// let i = 0;

// This initializes a counter i to 0. The variable i represents the current index of the image being displayed. Initially, i is set to 0, which means the first image (images[0]) will be shown.
// const images = [...]

// This creates an array images containing the paths to the images. Each element in this array corresponds to a different image ("./image1.png", "./image2.png", etc.). The i variable will be used to reference the current image in this array.