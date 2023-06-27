"use strict";

const allProducts = [];
const productImage1 = document.querySelector("section img:nth-child(2)");
const productImage2 = document.querySelector("section img:nth-child(3)");
const productImage3 = document.querySelector("section img:nth-child(4)");
const productSection = document.querySelector("section");
const resultsButton = document.querySelector("button");
const resultsList = document.querySelector("ul");
const productNames = [];
const percentages = [];
const previousViews = [];

let rounds = 0;
const maxRounds = 5;

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
  console.log(previousViews);
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index ||
    previousViews.includes(product1Index) ||
    previousViews.includes(product2Index) ||
    previousViews.includes(product3Index)
  ) {
    product1Index = getRandomIndex();
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
  }

  previousViews[0] = product1Index;
  previousViews[1] = product2Index;
  previousViews[2] = product3Index;

  //   console.log(previousViews);

  allProducts[product1Index].timesShown++;
  allProducts[product2Index].timesShown++;
  allProducts[product3Index].timesShown++;

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

    let selectedProductName = event.target.alt;

    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].name === selectedProductName) {
        allProducts[i].timesClicked++;
      }
    }

    if (rounds === maxRounds) {
      productSection.removeEventListener("click", handleProductClick);
      productSection.classList.add("disable");
      resultsButton.disabled = false;
      resultsButton.addEventListener("click", displayResults);
    }
    renderProducts();
  }
  return;
}

function displayResults() {
  renderBarChart();
  renderPieChart();
}

function renderBarChart() {
  const barChartCanvas = document.querySelector("canvas");
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].timesShown);
    productClicks.push(allProducts[i].timesClicked);
  }

  const barChartData = {
    labels: productNames,
    datasets: [
      {
        label: "Views",
        data: productViews,
        backgroundColor: ["yellow"],
        borderColor: ["sienna"],
        borderWidth: 1,
      },
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["orange"],
        borderColor: ["sienna"],
        borderWidth: 1,
      },
    ],
  };

  const barChart = new Chart(barChartCanvas, {
    type: "bar",
    data: barChartData,
    options: {
      scales: {
        y: {
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
}

function calculatePercentages() {
  for (let i = 0; i < allProducts.length; i++) {
    let percentage =
      (allProducts[i].timesClicked / allProducts[i].timesShown) * 100;
    if (!percentage) {
      percentage = 0;
    }
    percentage = percentage.toFixed();
    percentages.push(percentage);
  }
}

function getRandomColor() {
  const colorElements = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorElements[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderPieChart() {
  const pieChartCanvas = document.getElementById("pie-chart");
  const pieChartColors = [];

  for (let i = 0; i < allProducts.length; i++) {
    pieChartColors.push(getRandomColor());
  }

  calculatePercentages();

  const pieChartData = {
    labels: productNames,
    datasets: [
      {
        label: "Percentage of views selected",
        data: percentages,
        backgroundColor: pieChartColors,
      },
    ],
  };

  const pieChart = new Chart(pieChartCanvas, {
    type: "pie",
    data: pieChartData,
  });
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
