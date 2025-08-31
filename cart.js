// Store cart items in localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(item) {
  let cart = getCart();
  cart.push(item);
  saveCart(cart);
  alert(item.name + " added to cart!");
}

// Display cart
function displayCart() {
  let cart = getCart();
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove item
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  displayCart();
}

// Checkout
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cart-items")) {
    displayCart();
  }
  let checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert("Checkout process will be added here (Stripe/PayPal/Apple Pay).");
    });
  }
});
