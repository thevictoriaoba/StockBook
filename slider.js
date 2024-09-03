const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

window.addEventListener('resize', () => {
    showSlide(currentIndex);
});


window.addEventListener('resize', adjustSlides);

// Initialize the slider
adjustSlides();


