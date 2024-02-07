const closeBar = document.getElementById('hamburger-menu');
const openBar = document.getElementById('hamburger-open');
const nav = document.getElementById('navbar');

openBar.addEventListener('click', ()=> {
    nav.classList.add('active');
})
closeBar.addEventListener('click', ()=> {
    nav.classList.remove('active');
});

const bigImage = document.getElementById('bigImage');
const smallImage = document.querySelectorAll('.small-img');

