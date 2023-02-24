const categories = [
    {
        name: "Guides de voyage",
        description: "Itinéraires de voyage à travers différentes régions du monde Pokémon"
    },
    {
        name: "Livres sur les objets et les équipements",
        description: "Explication des différents types d'objets et d'équipements disponibles dans l'univers de Pokémon"
    },
    {
        name: "Livres sur les types de Pokémon",
        description: "Présentation des différents types de Pokémon et de leurs forces et faiblesses"
    },
    {
        name: "Livres d'entraînement",
        description: "Programmes d'entraînement pour les dresseurs de Pokémon"
    },
    {
        name: "Livres sur les légendes et les mythes",
        description: "Histoires sur les créatures légendaires de l'univers de Pokémon"
    }
];

const bookContainer = document.querySelector('.book-container');
categories.forEach((category) => {
        const ebook = document.createElement('div');
        ebook.className = 'ebook';
        ebook.innerHTML = `
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    `;
        bookContainer.appendChild(ebook);
    }
);


//menu burger
const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', () => {
    menu.classList.toggle('open');
});