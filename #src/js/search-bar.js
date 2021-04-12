 const searchBtnOpen = document.querySelector(".header__search-sign-link--search");
 const searchBtnOpenIcon = document.querySelector(".search-icon");
 const searchBtnClose = document.querySelector(".header__search-sign-search-btn-close");
 const searchForm = document.querySelector(".header__search-sign-search-form");
 const searchFormInput = document.querySelector(".header__search-sign-search-input");

 const searchInputClose = () => {
   searchForm.classList.remove("active");
   searchBtnOpenIcon.classList.remove("active");
   searchFormInput.value = "";
};

if (searchForm) {

 searchBtnOpen.addEventListener("click", function (e) {
   e.preventDefault();
   searchForm.classList.toggle("active");
   searchBtnOpenIcon.classList.toggle("active");
   searchBtnOpen.blur();

   if (searchForm.classList.contains("active")) {

     searchBtnClose.addEventListener("click", function (e) {
       searchInputClose();
     });

     window.onscroll = function() {scrollUp()};
     function scrollUp() {
       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         searchInputClose();
       }

     }

     document.body.addEventListener("click", function (event) {
       if (event.target.closest(".header__search-sign-search-form")) {
           return;
       }
       else if (event.target.closest(".header__search-sign-link--search")) {
         return;
       }
       else {
         searchInputClose();
       }
    });
   }
 });
}