window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav-menu'),
    menuItem = document.querySelectorAll('.header__nav-link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
        })
    });
});

/* hero swiper */
const swiper = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
        centeredSlides: false,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,
        },
    },
  });
/* why swiper */
const swiper2 = new Swiper('.why__wrapper .why__swiper', {
    slidesPerView: 1,
    spaceBetween: 11,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
          },
        576: {
          slidesPerView: 2,
          spaceBetween: 11,
          centeredSlides: false,
          loop: true,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 11,
        centeredSlides: false,
        loop: true,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 11,
        centeredSlides: false,
        },
    },
});


