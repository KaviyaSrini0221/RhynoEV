const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });

// -------------------------------------------------------------------------------

const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];
let current = 0;

const changeWord = () => {
    const wordElement = document.querySelector('.changing-word');
    wordElement.textContent = words[current];
    current = (current + 1) % words.length;
};

// Change the word every 2 seconds
setInterval(changeWord, 2000);
// -------------------------------------------------------------------------------
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}