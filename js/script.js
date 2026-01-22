const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const creekImages = document.querySelectorAll('.creek-slider img');
let creekIndex = 0;

setInterval(() => {
    creekImages[creekIndex].classList.remove('active');
    creekIndex = (creekIndex + 1) % creekImages.length;
    creekImages[creekIndex].classList.add('active');
}, 5000);

/* ================= FASHION SHOW SLIDER ================= */
const fashionImages = document.querySelectorAll('.fashion-slider img');
let fashionIndex = 0;
setInterval(() => {
    fashionImages[fashionIndex].classList.remove('active');
    fashionIndex = (fashionIndex + 1) % fashionImages.length;
    fashionImages[fashionIndex].classList.add('active');
}, 5000);