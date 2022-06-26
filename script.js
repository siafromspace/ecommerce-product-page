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
const cartBodyInner = document.querySelector(".cart-body-inner")
const cart = document.querySelector(".cart")
const mainProduct = document.getElementById("mainProduct")
const productThumbnail = Array.from(document.querySelectorAll(".product-thumbnail"))
const prevBtn = document.querySelector(".previous-img")
const nextBtn = document.querySelector(".next-img")
const mobileProduct = Array.from(document.querySelectorAll(".mobile-product"))

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
        cartBodyInner.innerHTML =
            `<div>
              <div class='checkout-details' >
                <img src='images/image-product-1-thumbnail.jpg' alt='' class='checkout-img'>
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>$125.00 * ${cartItemsNo} <span>$${+cartItemsNo * 125}</span></p>
                </div>
                <i onclick="deleteCartItem()" class='fa-solid fa-trash-can'></i>
              </div>
              <button class="checkout-btn">Checkout</button>
            </div > `
    } else {
        alert("You can not add 0 items to cart.")
    }
})
//View Cart Body
cart.addEventListener("click", () => {
    cartBody.classList.toggle("view")
})
//Delete Items from Cart
function deleteCartItem() {
    cartBodyInner.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`
    cartItems.style.visibility = "hidden"
}
//Desktop Site, Change Main Image
productThumbnail.forEach(product => {
    product.addEventListener("click", () => {
        for (let product of productThumbnail) {
            product.classList.remove("clicked")
        }
        mainProduct.src = `images/image-product-${product.dataset.number}.jpg`
        product.classList.add("clicked")
    })
})
//Mobile Site, Change Main Image
nextBtn.addEventListener("click", () => {
    const presentMobileImg = document.querySelector(".display")
    const currentIndex = mobileProduct.indexOf(presentMobileImg)
    const nextIndex = (currentIndex + 1) % mobileProduct.length
    mobileProduct[currentIndex].classList.remove("display")
    mobileProduct[nextIndex].classList.add("display")
})

prevBtn.addEventListener("click", () => {
    const presentMobileImg = document.querySelector(".display")
    const currentIndex = mobileProduct.indexOf(presentMobileImg)
    const prevIndex = (currentIndex + mobileProduct.length - 1) % mobileProduct.length
    mobileProduct[currentIndex].classList.remove("display")
    mobileProduct[prevIndex].classList.add("display")
})