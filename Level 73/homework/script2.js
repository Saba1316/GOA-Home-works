let currentIndex = 0;
    const images = document.querySelectorAll('.slider-images img');
    const totalImages = images.length;
    const slider = document.querySelector('.slider-images');
    
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        slider.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
    });
    
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        slider.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
    });