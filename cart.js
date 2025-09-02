let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - £${entry.price.toFixed(2)} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  // Secure redirect to payment gateway
  window.location.href = "https://www.paypal.com/checkout"; // Replace with Stripe/PayPal live checkout URL
});
