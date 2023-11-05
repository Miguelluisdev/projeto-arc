// scroll top
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

// slider 
const slider = document.querySelector('.slider');
let count = 0;

function slideImage() {
    count++;
    if (count > 4) {
        count = 0;
    }
    const offset = -count * 50;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slideImage, 5000); 

const paineis = document.querySelectorAll('.painel');

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})

function removeActiveClasses(){
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}