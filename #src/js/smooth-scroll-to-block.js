/* menu scroll to function */
const menuLinks = document.querySelectorAll('.header__nav-link[data-goto], .btn[data-goto], .down-btn[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValueMobile = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__nav').offsetHeight;
                const gotoBlockValuePC = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if(screen.width <= 768) {
                    window.scrollTo({
                        top: gotoBlockValueMobile,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo({
                        top: gotoBlockValuePC,
                        behavior: 'smooth'
                    });
                }
                e.preventDefault();
            }
        });
    });
}
/* /menu scroll to function */