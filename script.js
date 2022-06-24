const mobileMenu = document.querySelector(".mobile-menu")
const menuBtn = document.getElementById("menu-btn")
const closeMenu = document.querySelector(".close-menu")

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add('active')
})
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove('active')
})