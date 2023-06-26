"use strict";

const allProducts = [];
const productImage1 = document.querySelector("section img:nth-child(2)");
const productImage2 = document.querySelector("section img:nth-child(3)");
const productImage3 = document.querySelector("section img:nth-child(4)");
const productSection = document.querySelector("section");

let rounds = 0;

productSection.addEventListener("click", handleProductClick);

function Product(name) {
  this.name = name;
  this.imgUrl = `images/${name}.jpg`;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProducts.push(this);
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  //   console.log(product1Index, product2Index, product3Index);

  while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index
  ) {
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
  }

  allProducts[product1Index].timesShown++;
  allProducts[product2Index].timesShown++;
  allProducts[product3Index].timesShown++;

  //   console.log(product1Index, product2Index, product3Index);

  productImage1.src = allProducts[product1Index].imgUrl;
  productImage2.src = allProducts[product2Index].imgUrl;
  productImage3.src = allProducts[product3Index].imgUrl;

  productImage1.alt = allProducts[product1Index].name;
  productImage2.alt = allProducts[product2Index].name;
  productImage3.alt = allProducts[product3Index].name;
}

function handleProductClick(event) {
  if (event.target.tagName === "IMG") {
    rounds++;

    renderProducts();
    console.log(rounds);
  }
  return;
}

const bag = new Product("bag");
const banana = new Product("banana");
const bathroom = new Product("bathroom");
const boots = new Product("boots");
const breakfast = new Product("breakfast");
const bubblegum = new Product("bubblegum");
const chair = new Product("chair");
const cthulhu = new Product("cthulhu");
const dogDuck = new Product("dog-duck");
const dragon = new Product("dragon");
const pen = new Product("pen");
const petSweep = new Product("pet-sweep");
const scissors = new Product("scissors");
const shark = new Product("shark");
const sweep = new Product("sweep");
const tauntaun = new Product("tauntaun");
const unicorn = new Product("unicorn");
const waterCan = new Product("water-can");
const wineGlass = new Product("wine-glass");

renderProducts();
