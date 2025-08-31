// cart.js

let cart = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      ${item.name} – $${item.price.toFixed(2)}
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout button (Stripe/Apple Pay will be wired here later)
checkoutBtn.addEventListener("click", () => {
  alert("Redirecting to checkout (Stripe/Apple Pay will be here).");
});
