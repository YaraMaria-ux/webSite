let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {

    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

// notificação
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () => {
        bell.classList.toggle('active');
    }
    // swiper

var swiper = new Swiper(" .trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // aqui as fotos vao para o lado sizinha 
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 5,
            spaceBetween: 10,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32,

        },

        1068: {
            // aqui vc define quantas mine fotos voce vai add na tela 
            slidesPerView: 2,
            // aqui é o espaço entre elas 
            spaceBetween: 20,
            // lembrando que para ter 5 fotos vc deve ter 5 slide no html
        },
    },
});