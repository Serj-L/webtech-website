//sticky navigation + scroll up
const navBar = document.querySelector(".header__logo-nav");
const navBarHeight = navBar.offsetHeight;
const socialNavBar = document.querySelector(".header__socials");
const socialNavBarHeight = socialNavBar.offsetHeight;

/* window.onscroll = function() {stickyNav()}; */

function stickyNav() {
  if (
    document.body.scrollTop > socialNavBarHeight ||
    document.documentElement.scrollTop > socialNavBarHeight
  ) {
    navBar.classList.add("sticky");
    socialNavBar.style.marginBottom = `${navBarHeight}px`;
  } else {
    navBar.classList.remove("sticky");
    socialNavBar.style.marginBottom = "";
  }
}
//sticky navigation + scroll up
