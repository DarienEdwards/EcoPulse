const scrollBtn = document.getElementById('scrollTopBtn');

function toggleScrollButton() {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', toggleScrollButton);
scrollBtn.addEventListener('click', scrollToTop);

