var header = document.getElementsByName('header');

var isActivated = false;
let img_x = document.getElementById('x');
let img_menu = document.getElementById('imgMenu');
let img_hamburger = document.getElementById('menu');
let navBar = document.getElementById('navBar');


const handleClick = () => {
    isActivated = !isActivated;
    if (isActivated) {
        img_menu.src = '../../asserts/x.png';
        navBar.classList.add('navBar');
    }
    else {
        img_menu.src = '../../asserts/menu.png';
        navBar.classList.remove('navBar');
    }
};