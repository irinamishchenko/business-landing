let burger = document.querySelector(".header__container__burger-menu");
let menu = document.querySelector(".header__container__nav-list");
let menuIcon = document.querySelector(".header__container__burger-menu-icon");
let closeIcon = document.querySelector(".header__container__burger-menu-close");

function showMenu() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.style.display = "flex";
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", showMenu);
