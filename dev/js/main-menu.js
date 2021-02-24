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


let thumbnails = document.getElementsByClassName('ventas-slider__thumbnail')
let activeImages = document.getElementsByClassName('ventas-slider__active')

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        console.log(activeImages)
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('ventas-slider__active')
        }
        this.classList.add('ventas-slider__active')
        document.getElementById('visor-img').src = this.src
    })
}
