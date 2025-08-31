<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Cart - Aphrodite Antiques</title>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Dancing Script', cursive;
      text-align: center;
      margin: 0;
      padding: 20px;
      background: #fff;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    #cart-items {
      margin: 20px auto;
      max-width: 600px;
      text-align: left;
    }
    .cart-item {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      font-size: 1.2rem;
    }
    #cart-total {
      margin-top: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }
    #checkout-btn {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1.2rem;
      cursor: pointer;
      border: none;
      background: black;
      color: white;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Your Shopping Cart</h1>

  <div id="cart-items"></div>
  <div id="cart-total">Total: $0</div>

  <button id="checkout-btn">Proceed to Checkout</button>

  <p style="margin-top:20px;">
    <a href="index.html">← Continue Shopping</a>
  </p>

  <script src="cart.js"></script>
</body>
</html>
