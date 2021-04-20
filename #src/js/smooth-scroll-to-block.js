// menu scroll to function
const menuLinks = document.querySelectorAll(
  ".header__nav-link[data-goto], .header__hero-btn[data-goto]"
);

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function (e) {
      const menuLink = e.target;
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header__logo-nav").offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });

        e.preventDefault();
      }
    });
  });
}
// menu scroll to function
