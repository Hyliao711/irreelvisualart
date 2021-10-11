const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: {
      invert: false,
      releaseOnEdges: true,
      sensitivity: 2,	
    },
});
