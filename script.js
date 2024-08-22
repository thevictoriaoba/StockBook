// Get the elements
const outerPopup = document.getElementById('outerPopup');
const innerPopup = document.getElementById('innerPopup');

// Buttons to open and close pop-ups
const openOuterPopupBtn = document.getElementById('openOuterPopup');
const closeOuterPopupBtn = document.getElementById('closeOuterPopup');
const openInnerPopupBtn = document.getElementById('openInnerPopup');
const closeInnerPopupBtn = document.getElementById('closeInnerPopup');

// Open the outer pop-up
openOuterPopupBtn.onclick = function() {
    outerPopup.style.display = 'block';
};

// Close the outer pop-up
closeOuterPopupBtn.onclick = function() {
    outerPopup.style.display = 'none';
};

// Open the inner pop-up
openInnerPopupBtn.onclick = function() {
    outerPopup.style.display = 'none'; // Hide outer popup
    innerPopup.style.display = 'block'; // Show inner popup
};

// Close the inner pop-up
closeInnerPopupBtn.onclick = function() {
    innerPopup.style.display = 'none'; // Hide inner popup
    // Optionally, you can keep outer popup hidden or provide a way to show it again
};







const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 3 : slides.length - 3;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 3) ? currentIndex + 3 : 0;
    showSlide(currentIndex);
});

window.addEventListener('resize', () => {
    showSlide(currentIndex);
});