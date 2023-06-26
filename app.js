"use strict";

const allProducts = [];

function Product(name) {
  this.name = name;
  this.imgUrl = `images/${name}.jpg`;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProducts.push(this);
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
