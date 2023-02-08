"use strict";

let header = document.querySelector(".header");
window.addEventListener("scroll", addRemoveHeaderBackgroundColor);

function addRemoveHeaderBackgroundColor() {
    if (document.documentElement.clientWidth > 767) {
        if (scrollY >= 60 && !header.classList.contains("header-bg-white")) {
            header.classList.add("header-bg-white")
        }

        if (scrollY < 60 && header.classList.contains("header-bg-white")) {
            header.classList.remove("header-bg-white")
        }
    }
}

let burgerButton = document.querySelector(".header__burger");
let list = document.querySelector(".header__list");
burgerButton.addEventListener("click", openCloseMenu);

function openCloseMenu(event) {
    event.preventDefault();
    list.classList.toggle("header__list-openClose");
}

