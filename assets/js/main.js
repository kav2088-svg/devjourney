// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();
// ==========================
// SLIDER – Séance 3
// ==========================

// 1. Récupération des éléments du DOM
const slides = document.querySelectorAll('.slide'); // liste de toutes les slides
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

// 2. Variable pour suivre l'index de la slide active
let currentIndex = 0;
// Fonction pour mettre à jour l'affichage des slides
function showSlide(index) {
    // 1. Corriger l'index si on dépasse les bornes
    if (index < 0) {
        currentIndex = slides.length - 1; // revenir à la dernière slide
    } else if (index >= slides.length) {
        currentIndex = 0; // revenir à la première slide
    } else {
        currentIndex = index;
    }

    // 2. Boucle pour mettre toutes les slides en "non actives"
    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Afficher la première slide au chargement
showSlide(currentIndex);
// Événements sur les boutons du slider
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1); // slide précédente
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1); // slide suivante
    });
}
// Slider automatique toutes les 5 secondes
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
// ==========================
// Exemple pédagogique – Variables & conditions
// ==========================

// Imaginons un niveau de progression (0 à 100)
let progression = 30;

if (progression < 50) {
    console.log('Progression : débutante, continue à pratiquer !');
} else if (progression < 80) {
    console.log('Progression : bon niveau, tu es sur la bonne voie.');
} else {
    console.log('Progression : niveau avancé, bravo !');
}

