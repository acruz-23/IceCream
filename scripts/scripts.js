console.log("JS working");

const submitOrderBtnEl = document.getElementById("submitOrderBtn");
// const over25ChargeEl = document.getElementById("noRadioBtn");
// const under25surcharge = document.getElementById("yesRadioBtn");
// over25ChargeEl.onclick = onageSelectorElChecked;
// under25surcharge.onclick = onageSelectorElChecked;
submitOrderBtnEl.onclick = onsubmitOrderBtnClicked;

function onageSelectorElChecked() {
  console.log("onageSelectorElChecked Started");
  const toppingOptions = document.getElementById("toppingOptions");
  const surchageRow = document.getElementById("surchargeRow");
  if (under25surcharge.checked) {
    surchageRow.style.display = "table-row";
  } else {
    surchageRow.style.display = "none";
  }
  console.log("onageSelectorElChecked finished");
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
