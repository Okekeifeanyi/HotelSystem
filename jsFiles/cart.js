let cart = [
  { name: 'Deluxe Room', price: 120 },
  { name: 'Luxury Suite', price: 200 },
  { name: 'Single Room', price: 80 },
];

function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = ''; // Clear the list
  let total = 0;

  if (cart.length > 0) {
    cart.forEach((item, index) => {
      total += item.price;
      // Create list item for each cart element
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price} <button class="remove-btn" onclick="removeItem(${index})">Remove</button>`;
      cartItems.appendChild(li);
    });
  } else {
    cartItems.innerHTML = '<li>Your cart is empty</li>';
  }

  cartTotal.innerText = total.toFixed(2); // Update the total
}

function removeItem(index) {
  // Remove the selected item and reload the cart
  cart.splice(index, 1);
  loadCart(); // Refresh the cart items
}

function clearCart() {
  cart = []; // Clear all items in the cart
  loadCart(); // Refresh the cart
}

window.onload = loadCart; // Load the cart when the page loads
