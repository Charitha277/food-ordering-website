// 🍱 Food Items with Real Images
const menuItems = [
  {
    name: "Margherita Pizza",
    price: 250,
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
  },
  {
    name: "Veg Burger",
    price: 120,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
  },
  {
    name: "Fried Rice",
    price: 180,
    image: "https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_1280.jpg"
  },
  {
    name: "Ice Cream",
    price: 90,
    image: "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg"
  },
  {
    name: "French Fries",
    price: 100,
    image: "https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527044_1280.jpg"
  }
];



const cart = [];

// 📦 Get HTML Elements
const menuContainer = document.getElementById('menu');
const cartContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalDisplay = document.getElementById('total');

// 🍽️ Render Menu Items
menuItems.forEach((item, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  menuContainer.appendChild(card);
});

// ➕ Add to Cart Function
function addToCart(index) {
  cart.push(menuItems[index]);
  updateCart();
}


function updateCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const cartItem = document.createElement('div');
    cartItem.innerText = `🍴 ${item.name} - ₹${item.price}`;
    cartContainer.appendChild(cartItem);
  });

  cartCount.innerText = cart.length;
  totalDisplay.innerText = cart.length > 0 ? `Total: ₹${total}` : "";
}

