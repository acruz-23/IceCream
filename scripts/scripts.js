console.log("JS working");

const submitOrderBtnEl = document.getElementById("submitOrderBtn");
const coneRadioBtnEl = document.getElementById("coneRadioBtn");
const cupRadioBtnEl = document.getElementById("cupRadioBtn");
cupRadioBtnEl.onclick = onRadioBtnsClicked;
coneRadioBtnEl.onclick = onRadioBtnsClicked;
submitOrderBtnEl.onclick = onsubmitOrderBtnClicked;

function onRadioBtnsClicked() {
  console.log("onRadioBtnsClicked Started");
  const toppingOptions = document.getElementById("toppingOptions");
  const toppingSectionTitle = document.getElementById("toppingTitle");
  if (coneRadioBtnEl.checked) {
    toppingOptions.style.display = "none";
    toppingSectionTitle.innerHTML = "Toppings Only Available With Cups";
  } else {
    toppingOptions.style.display = "flex";
    toppingSectionTitle.innerHTML = "Toppings";
  }
  console.log("onRadioBtnsClicked finished");
}

function onsubmitOrderBtnClicked() {
  console.log("onsubmitOrderBtnClicked Started");
  // calc base ice cream cost
  const numOfScoops = +document.getElementById("numOfScoops").value;
  let scoopPrice = 2.25 + (numOfScoops - 1) * 1.25;
  console.log("num of scoops ", numOfScoops);
  console.log("scoop price", scoopPrice);

  //calc Topping Total
  const sprinkleOptionEl = document.getElementById("sprinkleOption");
  const whippedCreamOptionEl = document.getElementById("whippedCreamOption");
  const hotFudgeOptionEl = document.getElementById("hotFudgeOption");
  const cherryOptionEl = document.getElementById("cherryOption");
  let toppingsPrice = 0;
  if (sprinkleOptionEl.checked) {
    toppingsPrice += 0.5;
  }
  if (whippedCreamOptionEl.checked) {
    toppingsPrice += 0.25;
  }
  if (hotFudgeOptionEl.checked) {
    toppingsPrice += 1.25;
  }
  if (cherryOptionEl.checked) {
    toppingsPrice += 0.25;
  }

  //calc base price
  const basePrice = scoopPrice + toppingsPrice;
  document.getElementById("basePrice").innerHTML = " " + basePrice.toFixed(2);

  //calc tax 6% for my area
  const taxAdded = basePrice * 0.06;
  document.getElementById("taxAdded").innerHTML = " " + taxAdded.toFixed(2);

  //calc Total Due
  const totalDue = basePrice + taxAdded;
  document.getElementById("totalDue").innerHTML = " " + totalDue.toFixed(2);
  console.log("onsubmitOrderBtnClicked finished");
}
