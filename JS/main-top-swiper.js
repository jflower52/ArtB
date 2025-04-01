var swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth <= 1024 ? 1 : 3,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // 화면 크기 변화에 따라 슬라이드 개수를 다시 설정
  on: {
    resize: function () {
      this.params.slidesPerView = window.innerWidth <= 1024 ? 1 : 3;
      this.update();
    },
  },
});
