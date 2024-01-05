let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

const body = document.getElementById("main");

    document.addEventListener("DOMContentLoaded", function () {
    body.style.display = "none"
        document.querySelector('.loader-circle').style.display = 'block';
    });

    window.addEventListener("load", function () {
        document.querySelector('.loader-circle').style.display = 'none';
        body.style.display = "block"
    });


