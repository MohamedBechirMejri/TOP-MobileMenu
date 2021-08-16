import './main.scss';

const navToggle = document.querySelector('.navtoggle');
const navListContainer = document.querySelector('.navlinks-container');
navToggle.addEventListener('click', () => {
    navListContainer.classList.toggle('hidden');
    navToggle.classList.toggle('toggled');
});
