// cart.js

let cart = [];

// Update the cart display on cart.html
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return; // Only run on cart.html

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `${item.name} – $${item.price.toFixed(2)} 
      <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

// Add an item to the cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} has been added to your cart.`);
  updateCart();
}

// Remove an item from the cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout button (Stripe/Apple Pay integration comes later)
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert("Redirecting to checkout (Stripe/Apple Pay will be added here)");
    });
  }

  updateCart();
});
