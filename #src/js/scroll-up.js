// scroll up
const scrBtn = document.querySelector('.scroll-up-btn');

window.onscroll = function() {scrollUpFunction()};

function scrollUpFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrBtn.classList.add('active');
  } else {
    scrBtn.classList.remove('active');
  }
}

scrBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"});
});
// scroll up
