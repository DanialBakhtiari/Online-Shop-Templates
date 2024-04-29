//? the theme btns
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// ? the submenu btn
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and submenu elements
  const submenuBtn = document.querySelector(".submenu_btn");
  const submenu = document.querySelector(".submenu");

  // Add click event listener to the button
  submenuBtn.addEventListener("click", function (event) {
    // Prevent the default action of the button
    event.preventDefault();

    // Toggle the class on the submenu element
    submenu.classList.toggle("submenu--open");
  });
});

// ? the submenu close btn and the overlay
const navOpenBtn = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navCloseBtn = document.querySelector(".nav-close-btn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay--visible");
}),
  navCloseBtn.addEventListener("click", () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible");
  }),
  overlay.addEventListener("click", () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible");
  });

// ?cart Icon In MobileShop
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cart = document.querySelector(".cart");

cartOpenBtn.addEventListener("click", () => {
  cart.classList.remove("-left-64");
  cart.classList.add("left-0");
  overlay.classList.add("overlay--visible");
}),
  cartCloseBtn.addEventListener("click", () => {
    cart.classList.add("-left-64");
    cart.classList.remove("left-0");
    overlay.classList.remove("overlay--visible");
  }),
  overlay.addEventListener("click", () => {
    cart.classList.add("-left-64");
    cart.classList.remove("left-0");
    overlay.classList.remove("overlay--visible");
  });

// const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
// const submenuOpenBtn = document.querySelector(".submenu-open-btn");
// const submenu = document.querySelector(".submenu");
// const navOpenBtn = document.querySelector(".nav-icon");
// const navCloseBtn = document.querySelector(".nav-close-btn");
// const nav = document.querySelector(".nav");
// const overlay = document.querySelector(".overlay");

// toggleThemeBtns.forEach(btn => {
//     btn.addEventListener("click", function (){
//         if (localStorage.theme === "dark"){
//             document.documentElement.classList.remove("dark");
//             localStorage.theme = "light";
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme" , "dark");
//         }
//     })
// })
// submenuOpenBtn.addEventListener("click", (e) => {
//     e.currentTarget.parentElement.classList.toggle("text-orange-300");
//     submenu.classList.toggle("submenu--open");
// })
// navOpenBtn.addEventListener("click",() => {
//     nav.classList.remove("-right-64");
//     nav.classList.add("right-0");
//     overlay.classList.add("overlay--visible");

// })

// function closeNav() {
//     nav.classList.remove("right-0");
//     nav.classList.add("-right-64");
//     overlay.classList.remove("overlay--visible");
// }

// navCloseBtn.addEventListener("click",closeNav);
// overlay.addEventListener("click",closeNav);
