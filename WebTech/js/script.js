'use strict';

//sticky navigation
 const navBar = document.querySelector('.header__logo-nav');
 const navBarHeight = navBar.offsetHeight;
 const socialNavBar = document.querySelector('.header__socials');
 const socialNavBarHeight = socialNavBar.offsetHeight;

 window.onscroll = () => {checkScroll()};

 function checkScroll() {
   if (document.body.scrollTop > socialNavBarHeight || document.documentElement.scrollTop > socialNavBarHeight) {
     navBar.classList.add('sticky');
     socialNavBar.style.marginBottom = `${navBarHeight}px`;
   } else {
     navBar.classList.remove('sticky');
     socialNavBar.style.marginBottom = '';
   }
 }
//sticky navigation
// menu scroll to function
const menuLinks = document.querySelectorAll('.header__nav-link[data-goto], .header__hero-btn[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__logo-nav').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });

                e.preventDefault();
            }
        });
    });
}
// menu scroll to function
const burgerMenu = document.querySelector('.header__burger-btn');
const menuWrapper = document.querySelector('.header__nav');
const wrapper = document.querySelector('.header__logo-nav-wrapper');
const socialWrapper = document.querySelector('.header__socials')
const headerWrapper = document.querySelector('.header__fullscreen-body')
const killBurger = () => {
    showScroll();
    burgerMenu.classList.remove('active');
    menuWrapper.classList.remove('active');
};

// scroll-bar width calculation
const getscrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'adsolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
// /scroll-bar width calculation

const hideScroll = () => {
    const scrollWidht = `${getscrollbarWidth()}px`;
    const negativeScrollWidht = `-${getscrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidht;
    document.body.style.overflow = 'hidden';
    wrapper.style.paddingRight = scrollWidht;
    socialWrapper.style.paddingRight = scrollWidht;
    headerWrapper.style.marginRight = negativeScrollWidht;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
    wrapper.style.paddingRight = '';
    socialWrapper.style.paddingRight = '';
    headerWrapper.style.marginRight = '';
};

// burger menu
if (burgerMenu) {

    burgerMenu.addEventListener('click', function (e) {
        burgerMenu.classList.toggle('active');
        menuWrapper.classList.toggle('active');

        if (menuWrapper.classList.contains('active')) {
            hideScroll();

            window.addEventListener('resize', function (e) {
                if(screen.width > 992 && menuWrapper.classList.contains('active')) {
                    killBurger()
                }
            });

        } else {
            showScroll();
        }
    });

    const menuLinks = document.querySelectorAll('.header__nav-link');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function (e) {
                if (menuWrapper.classList.contains('active')) {
                    killBurger();
                }
            });
        });
    }
}
// /burger menu

//check broswer webP support
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else{
        document.querySelector('body').classList.add('no-webp');
    }
 });
//check broswer webP support