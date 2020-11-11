"use strict";

new WOW().init();

const navBtn = document.querySelector('.nav__btn');
const navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', () => {
   navMenu.classList.toggle('nav-menu--active');
   navBtn.classList.toggle('active')
})

$(".heroes__slider").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '<button type="button" class="slick-prev"></button>',
   nextArrow: '<button type="button" class="slick-next"></button>',
   responsive: [
      {
         breakpoint: 768,
         settings: {
            arrows: false,
         },
      },
   ],
});


