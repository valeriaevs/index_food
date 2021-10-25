const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next', /* меняем название класса, чтобы убрать дефолтный дизайн */ 
    prevEl: '.slider-button-prev',
  },
});