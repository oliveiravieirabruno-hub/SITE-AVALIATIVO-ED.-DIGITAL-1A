// --- GESTÃO DE DADOS ---
const animais = [
    { nome: "Onça-Pintada", bioma: "Pantanal/Amazônia", desc: "O maior felino das Américas." },
    { nome: "Mico-Leão-Dourado", bioma: "Mata Atlântica", desc: "Símbolo da conservação no Brasil." },
    { nome: "Arara-Azul", bioma: "Cerrado", desc: "Conhecida por sua plumagem azul vibrante." },
    { nome: "Lobo-Guará", bioma: "Cerrado", desc: "O maior canídeo da América do Sul." }
];

const biomasInfo = [
    { titulo: "Amazônia", texto: "A maior biodiversidade do planeta." },
    { titulo: "Cerrado", texto: "A savana brasileira, rica em espécies endêmicas." },
    { titulo: "Pantanal", texto: "A maior planície inundável do mundo." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function renderGallery() {
    const grid = document.getElementById('animal-grid');
    grid.innerHTML = animais.map(animal => `
        <article class="animal-card">
            <h3>${animal.nome}</h3>
            <p><strong>Bioma:</strong> ${animal.bioma}</p>
            <p>${animal.desc}</p>
        </article>
    `).join('');
}

// --- ACESSIBILIDADE: FONTE E CONTRASTE ---
let fontSize = 16;
document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('toggle-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// --- CARROSSEL ---
let currentSlide = 0;
function renderCarousel() {
    const track = document.getElementById('carousel-track');
    track.innerHTML = biomasInfo.map(info => `
        <div class="carousel-item">
            <h3>${info.titulo}</h3>
            <p>${info.texto}</p>
        </div>
    `).join('');
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % biomasInfo.length;
    updateCarousel();
});

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// --- INICIALIZAÇÃO ---
window.onload = () => {
    renderGallery();
    renderCarousel();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
