let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

const body = document.getElementById("main");

document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading, hide the loader
   body.style.display = "none"
    document.querySelector('.loader-circle').style.display = 'block';
});

window.addEventListener("load", function () {
    // Page has started loading, show the loader
    document.querySelector('.loader-circle').style.display = 'none';
    body.style.display = "block"
});
