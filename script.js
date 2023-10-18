const burger = document.querySelector(".header__container__burger-menu");
const menu = document.querySelector(".header__container__nav-list");
const menuIcon = document.querySelector(".header__container__burger-menu-icon");
const closeIcon = document.querySelector(
  ".header__container__burger-menu-close"
);

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
