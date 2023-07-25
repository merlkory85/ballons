"use strict"

const menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
    const menuHeader =document.querySelector('.header__menu');
    menuBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        menuHeader.classList.toggle('active');
    })
}