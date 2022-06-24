const mobileMenu = document.querySelector(".mobile-menu")
const menuBtn = document.getElementById("menu-btn")
const closeMenu = document.querySelector(".close-menu")
const overlay = document.querySelector(".overlay")


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add('active')
    overlay.classList.add('enabled')
})
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove('active')
    overlay.classList.remove('enabled')
})