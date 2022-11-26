let btnMenu = document.querySelector(".menu-btn");
let menuList = document.querySelector(".nav-list");

btnMenu.addEventListener("click", () => {
  menuList.classList.toggle("active-list");
});

// navbar scroll
let navbar = document.querySelector(".header");

window.onscroll = () => {
  // scroll navbar fixed
  if (window.scrollY > 20) {
    navbar.classList.add("header-scroll");
  } else {
    navbar.classList.remove("header-scroll");
  }
};
