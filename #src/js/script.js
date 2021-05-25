"use strict";

@@include("sticky-nav.js");
@@include("scroll-up.js");
@@include("smooth-scroll-to-block.js");
@@include("burger.js");
@@include('modal.js')
@@include('swiper-bundle.min.js')

//check broswer webP support
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
//check broswer webP support

window.onscroll = function () {
  scrollUp();
  stickyNav();
};

//testimonials slider
const swiperTestimonialsCustomers = new Swiper('.testimonials__customers', {
  // parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  centeredSlides: true,
  speed: 700,

  breakpoints: {
    320: {slidesPerView: 1},
    576: {slidesPerView: 3},
  },

  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next"
  },
//spaceBetween: 20,
});

const testimonialsSlides = document.querySelectorAll('.testimonials__customers-slide');
const testimonialsSlidesImg = document.querySelectorAll('.testimonials__customers-img');
const testimonialsReview = document.querySelectorAll('.testimonials__review-slide-wrapper');

swiperTestimonialsCustomers.on('slideChange', function () {
  testimonialsSlidesImg.forEach(image => {
    if (Number(image.closest('.testimonials__customers-slide').dataset.swiperSlideIndex) === swiperTestimonialsCustomers.realIndex) {
      image.classList.add('testimonials__customers-img--active');
    } else {
      image.classList.remove('testimonials__customers-img--active');
    }
  });

  testimonialsSlides.forEach(slide => {
    if (Number(slide.dataset.swiperSlideIndex) === swiperTestimonialsCustomers.realIndex) {
      testimonialsReview.forEach(review => {
        if (Number(review.dataset.reviewId) === Number(slide.dataset.customerId)) {
          review.classList.add('testimonials__review-slide-wrapper--active');
        } else {
          review.classList.remove('testimonials__review-slide-wrapper--active');
        }
      })
    }
  });
});