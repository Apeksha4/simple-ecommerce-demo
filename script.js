const products = [
  { id: 1, name: "Bluetooth Speaker", price: 1599, category: "electronics", imageUrl: "images/speaker.jpg" },
  { id: 2, name: "Trouser", price: 2499, category: "fashion", imageurl:"images/trouser.jpg },
  { id: 3, name: "Classic White Shirt", price: 799, category: "fashion"," },
  { id: 4, name: "Blue Denim Jeans", price: 1199, category: "fashion", imageUrl: "images/jeans.jpg" },
  { id: 5, name: "Running Sneakers", price: 2899, category: "fashion", imageUrl: "images/sneakers.jpg" },
  { id: 6, name: "Makeup Brushes", price: 1599, category: "fashion", imageUrl: "images/brushes.jpg" },
  { id: 7, name: "Smartwatch", price: 4999, category: "electronics", imageUrl: "images/watch.jpg" },
  { id: 8, name: "Shoes", price: 1999, category: "fashion", imageUrl: "images/shoes.jpg" }
];

const container = document.getElementById("productContainer");

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
      <div class="product-name">${product.name}</div>
      <div class="product-price">₹${product.price}</div>
    `;
    container.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

displayProducts(products);
