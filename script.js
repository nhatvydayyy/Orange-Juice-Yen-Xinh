
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".order-btn");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
  });
});
