var header = document.getElementsByName('header');

var isActivated = false;
let img_x = document.getElementById('x');
let img_menu = document.getElementById('imgMenu');
let img_hamburger = document.getElementById('menu');
let navBar = document.getElementById('navBar');

window.addEventListener("resize", (event) => {
    navBar.classList.remove('navBar');
});


const handleClick = () => {
    isActivated = !isActivated;
    const path = window.location.pathname.split('/');
    const x = path.includes('src');
    if (isActivated) {
        img_menu.src = x ?  '../../asserts/x.png' : './src/asserts/x.png';
        navBar.classList.add('navBar');
        header.className = 'activated';
    }
    else {
        img_menu.src = x ? '../../asserts/menu.png' : './src/asserts/menu.png';
        navBar.classList.remove('navBar');
        header.className  = '';
    }
};