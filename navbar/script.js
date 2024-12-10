const
    menu = document.querySelector('#menu'),
    links = document.querySelector('#nav-links'),
    navLinks = document.querySelectorAll('.nav-links a');

// Alternar el menú
menu.addEventListener('click', () => {
    links.classList.toggle('show')
});

// Cerrar el menú al hacer clic en un enlace
// Se agrega evento click a cada uno de los .nav-links a
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('show')
    });
});