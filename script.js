
const cards = document.querySelectorAll('.project-card');
const carousel = document.querySelector('.projects-carousel');

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let activeIndex = 1;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === activeIndex);
    });

    const activeCard = cards[activeIndex];

    const offset = activeCard.offsetLeft
        + activeCard.offsetWidth / 2
        - carousel.clientWidth / 2;

    carousel.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}
if (nextButton) {
    nextButton.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel();
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });
}
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        activeIndex = index;
        updateCarousel();
    });
});

