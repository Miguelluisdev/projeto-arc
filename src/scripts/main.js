const scrollToTopButton = document.querySelector('.scrollTop');
const rootElement = document.documentElement;


function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


window.addEventListener('scroll', () => {
  if (rootElement.scrollTop > 100) {

    scrollToTopButton.classList.add('show');
  } else {
  
    scrollToTopButton.classList.remove('show');
  }
});


scrollToTopButton.addEventListener('click', scrollToTop);