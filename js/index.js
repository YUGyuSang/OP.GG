document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelectorAll('.img-container img');
const radios = document.querySelectorAll('.radio-buttons input[type="radio"]');
let currentSlide = 0;

function showSlide(index) {
    slider.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 370}px)`;
    });
}

function changeSlide() {
    currentSlide = (currentSlide + 1) % radios.length;
    radios[currentSlide].checked = true;
    showSlide(currentSlide);
}

setInterval(changeSlide, 2000);
});


