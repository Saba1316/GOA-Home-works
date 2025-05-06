let currentIndex = 0;
const totalImages = 6; // 6 images in total
const slider = document.querySelector('.slider-images');

// Handle Next button click
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    slider.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
});

// Handle Prev button click
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image
    slider.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
});