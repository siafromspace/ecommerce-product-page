const mobileMenu = document.querySelector(".mobile-menu")
const menuBtn = document.getElementById("menu-btn")
const closeMenu = document.querySelector(".close-menu")
const overlay = document.querySelector(".overlay")
const addItem = document.querySelector(".fa-plus")
const removeItem = document.querySelector(".fa-minus")
const itemInput = document.querySelector(".input")
const addToCart = document.querySelector(".add-to-cart")
const cartItems = document.querySelector(".cart-items")
const cartBody = document.querySelector(".cart-body")
const cart = document.querySelector(".cart")

// Add Menu Bar
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add('active')
    overlay.classList.add('enabled')
})

//Remove Menu Bar
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove('active')
    overlay.classList.remove('enabled')
})

//Increase Item Quantity
addItem.addEventListener("click", () => {
    itemValue = Number(itemInput.innerText)
    itemInput.innerText = itemValue + 1
})

//Reduce Item Quantity
removeItem.addEventListener("click", () => {
    if (itemInput.innerText > 0) {
        itemValue = Number(itemInput.innerText)
        itemInput.innerText = itemValue - 1
    }
})
//Add To Cart
addToCart.addEventListener("click", () => {
    const cartItemsNo = itemInput.innerText
    if (cartItemsNo > 0) {
        cartItems.style.visibility = "visible"
        cartItems.innerText = cartItemsNo
    } else {
        alert("You can not add 0 items to cart.")
    }
})
//View Cart Body
cart.addEventListener("click", () => {
    cartBody.classList.toggle("view")
})