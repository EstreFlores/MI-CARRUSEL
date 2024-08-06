document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('a');
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }

    setInterval(moveToNextSlide, 3000);
});
