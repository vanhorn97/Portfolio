const openButton = document.querySelector('.open-sidebar');
const navbar = document.getElementById('navbar');

const media = window.matchMedia('(width < 768px)')

media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e){
    const isMobile = e.matches;
    console.log(isMobile)
    if(isMobile){
        navbar.setAttribute('inert, "')
    }
    else{
        navbar.removeAttribute('inert');
    }   
}

function openSidebar() {
    navbar.classList.add('show');
    openButton.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert');
}

function closeSidebar() {
    navbar.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('inert', '');
}

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        closeSidebar()
    })
})

updateNavbar(media)