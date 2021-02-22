const toggleMenu = document.getElementById('menu-toggle');
const topMenu = document.getElementById('top-menu');
const menuPhone = document.getElementById('menu-phone');


toggleMenu.addEventListener('click', () => {
    topMenu.classList.toggle('activador');
    menuPhone.classList.toggle('activador');
});

