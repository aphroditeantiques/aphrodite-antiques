let cart = [];
let itemsTotal = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  itemsTotal += price;
  updateCart();
}

function removeFromCart(index) {
  itemsTotal -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const itemsTotalDisplay = document.getElementById("items-total");
  const shippingDisplay = document.getElementById("shipping-cost");
  const finalTotal = document.getElementById("final-total");

  cartItems.innerHTML = "";
  cart.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - €${entry.price.toFixed(2)} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  // Update totals
  itemsTotalDisplay.textContent = itemsTotal.toFixed(2);

  const region = parseFloat(document.getElementById("region").value) || 0;
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const shipping = region + weight;

  shippingDisplay.textContent = shipping.toFixed(2);
  finalTotal.textContent = (itemsTotal + shipping).toFixed(2);
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  // Redirect to payment (edit if you connect Stripe later)
  window.location.href = "https://www.paypal.com/checkout";
});
