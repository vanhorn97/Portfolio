const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.navbar');

navbar.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('.scrolled');
     } else {
        navbar.classList.remove('.scrolled');
    }
});

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navbarToggle.classList.remove('active');
    navbarMenu.classList.remove('active');
    overlay.classList.remove('active');
});