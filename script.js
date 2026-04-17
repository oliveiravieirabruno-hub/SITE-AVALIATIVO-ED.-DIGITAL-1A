// --- BASE DE DADOS (Simulando um JSON) ---
const especies = [
    { 
        nome: "Onça-Pintada", 
        classe: "Mamífero", 
        img: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&w=500",
        desc: "O topo da cadeia alimentar dos biomas brasileiros."
    },
    { 
        nome: "Arara-Vermelha", 
        classe: "Ave", 
        img: "https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&w=500",
        desc: "Pássaros inteligentes conhecidos por sua cor vibrante."
    },
    { 
        nome: "Jacaré-do-Pantanal", 
        classe: "Répteis", 
        img: "https://images.unsplash.com/photo-1549240923-93a2e080e653?auto=format&fit=crop&w=500",
        desc: "Essencial para o equilíbrio das águas pantaneiras."
    },
    { 
        nome: "Tamanduá-Bandeira", 
        classe: "Mamífero", 
        img: "https://images.unsplash.com/photo-1589921314905-9333555232a9?auto=format&fit=crop&w=500",
        desc: "Possui uma língua de 60cm para capturar formigas."
    }
];

const biomas = [
    { nome: "Amazônia", info: "O maior bioma brasileiro e a maior floresta tropical do mundo." },
    { nome: "Cerrado", info: "O berço das águas do Brasil, com vegetação de savana." },
    { nome: "Pantanal", info: "A maior área úmida continental do planeta." }
];

// --- RENDERIZADORES ---

function renderGrid(data) {
    const grid = document.getElementById('animal-grid');
    grid.innerHTML = data.map(animal => `
        <article class="animal-card" data-category="${animal.classe}">
            <img src="${animal.img}" alt="${animal.nome}" loading="lazy">
            <div class="card-body">
                <span class="badge">${animal.classe}</span>
                <h3>${animal.nome}</h3>
                <p>${animal.desc}</p>
            </div>
        </article>
    `).join('');
}

function renderAccordion() {
    const acc = document.getElementById('accordion-group');
    const faqs = [
        { q: "Qual a maior ameaça?", a: "
