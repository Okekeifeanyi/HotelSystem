// Example cart functionality
let cart = [
  { name: 'Deluxe Room', price: 120 },
  { name: 'Luxury Suite', price: 200 },
];

function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length > 0) {
    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button>`;
      cartItems.appendChild(li);
    });
  } else {
    cartItems.innerHTML = '<li>Your cart is empty</li>';
  }

  cartTotal.innerText = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  loadCart();
}

function clearCart() {
  cart = [];
  loadCart();
}

window.onload = loadCart;
