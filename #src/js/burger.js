const burgerMenu = document.querySelector(".header__burger-btn");
const menuWrapper = document.querySelector(".header__nav-wrapper");
const wrapper = document.querySelector(".header__logo-nav-wrapper");
const killBurger = () => {
    showScroll();
    burgerMenu.classList.remove("active");
    menuWrapper.classList.remove("active");
};

// scroll-bar width calculation
const getscrollbarWidth = () => {
    const outer = document.createElement("div");

    outer.style.position = "adsolute";
    outer.style.top = "-9999px";
    outer.style.width = "50px";
    outer.style.height = "50px";
    outer.style.overflow = "scroll";
    outer.style.visibility = "hidden";
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
// /scroll-bar width calculation

const hideScroll = () => {
    const scrollWidht = `${getscrollbarWidth()}px`

    document.body.style.paddingRight = scrollWidht;
    document.body.style.overflow = "hidden";
    wrapper.style.paddingRight = scrollWidht;
};

const showScroll = () => {
    document.body.style.paddingRight = "";
    document.body.style.overflow = "visible";
    wrapper.style.paddingRight = "";
};

// burger menu
if (burgerMenu) {

    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle("active");
        menuWrapper.classList.toggle("active");

        if (menuWrapper.classList.contains("active")) {
            hideScroll();

            window.addEventListener("resize", function (e) {
                if(screen.width > 992 && menuWrapper.classList.contains("active")) {
                    killBurger()
                }
            });

        } else {
            showScroll();
        }
    });

    const menuLinks = document.querySelectorAll(".nav-link");
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function (e) {
                if (menuWrapper.classList.contains("active")) {
                    killBurger();
                }
            });
        });
    }
}
// /burger menu