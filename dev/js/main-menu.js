const toggleMenu = document.getElementById('menu-toggle');
const topMenu = document.getElementById('top-menu');
const menuPhone = document.getElementById('menu-phone');


toggleMenu.addEventListener('click', () => {
    topMenu.classList.toggle('activador');
    menuPhone.classList.toggle('activador');
});

var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
        counter = 1;
        }
    }, 5000);

