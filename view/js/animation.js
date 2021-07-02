const navbar = document.getElementById('navbar-menu');
const btn = document.getElementById('btn-navbar-menu');
const icon = document.getElementById('icon-menu');

var showMenu = true;

btn.addEventListener('click', () => {
    if (showMenu) {
        navbar.className = 'navbar-menu show';
        icon.className = 'fas fa-times';
        showMenu = false;
    } else {
        navbar.className = 'navbar-menu hide';
        icon.className = 'fas fa-bars';
        showMenu = true;
    }
});