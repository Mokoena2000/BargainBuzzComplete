
async function fetchProducts() {
  try {
    const res = await fetch('/api/products');
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return [];
  }
}

async function loadProducts() {
  const products = await fetchProducts();
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded shadow hover:shadow-lg transition";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4">
      <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
      <p class="text-indigo-600 font-bold mb-2">$${product.price}</p>
      <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added product to cart!');
}

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartItems = document.getElementById('cart-items');
  if (!cartItems) return;
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center">Your cart is empty.</p>';
    return;
  }
  const products = await fetchProducts();
  let total = 0;
  cartItems.innerHTML = '';
  cart.forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    total += product.price;
    const item = document.createElement('div');
    item.className = "bg-white p-4 rounded shadow flex justify-between items-center";
    item.innerHTML = `
      <div class="flex items-center space-x-4">
        <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded">
        <div>
          <h3 class="font-semibold">${product.name}</h3>
          <p class="text-indigo-600 font-bold">$${product.price}</p>
        </div>
      </div>
      <button class="text-red-600 font-bold" onclick="removeFromCart(${product.id})">Remove</button>
    `;
    cartItems.appendChild(item);
  });
  document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(pid => pid !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function checkout() {
  alert('Checkout functionality not implemented. This is a demo.');
}
