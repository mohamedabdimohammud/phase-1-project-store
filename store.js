const cartCount = document.getElementById("cart-count");
let cart = [];

axios.get("https://fakestoreapi.com/products?category=sports")
.then(function(response) {
var products = response.data;
var productList = document.getElementById("product-list");
for (var i = 0; i < products.length; i++) {
var product = products[i];
var productCard = document.createElement("div");
productCard.classList.add("col-md-4", "mb-4");
var card = document.createElement("div");
card.classList.add("card", "h-100");
var cardImg = document.createElement("img");
cardImg.classList.add("card-img-top");
cardImg.setAttribute("src", product.image);
cardImg.setAttribute("alt", product.title);
var cardBody = document.createElement("div");
cardBody.classList.add("card-body");
var cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.textContent = product.title;
var cardText = document.createElement("p");
cardText.classList.add("card-text");
cardText.textContent = product.description;
var cardPrice = document.createElement("h6");
cardPrice.classList.add("card-subtitle", "mb-2", "text-muted");
cardPrice.textContent = "$" + product.price;
var cardButton = document.createElement("button");
cardButton.classList.add("btn", "btn-primary");
cardButton.textContent = "Add to Cart";
cardButton.addEventListener("click", function() {
cart.push(product);
cartCount.textContent = cart.length;
});
cardBody.append(cardTitle, cardText, cardPrice, cardButton);
card.append(cardImg, cardBody);
productCard.append(card);
productList.append(productCard);
}
})
.catch(function(error) {
console.log(error);
});