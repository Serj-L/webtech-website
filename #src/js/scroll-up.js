// scroll up
scrbtn = document.querySelector('.scroll-up-btn');

window.onscroll = function() {scrollUpFunction()};

function scrollUpFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrbtn.classList.add('active');
  } else {
    scrbtn.classList.remove('active');
  }
}

scrbtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"});
});
// scroll up
