console.log("JS working");
// const inputEl = document.querySelector(
//   "input[class='disableAtStart']:disabled"
// );
// inputEl.style.display = "none";
// const dayEl = document.getElementById("numOfDays");
// const pickupDateEl = document.getElementById("pickupDate");
const submitOrderBtnEl = document.getElementById("submitOrderBtn");
// const over25ChargeEl = document.getElementById("noRadioBtn");
// const under25surcharge = document.getElementById("yesRadioBtn");
// over25ChargeEl.onclick = onageSelectorElChecked;
// under25surcharge.onclick = onageSelectorElChecked;
submitOrderBtnEl.onclick = onsubmitOrderBtnClicked;
// dayEl.onchange = onChangeEl;
// pickupDateEl.onchange = onChangeEl;

// function onChangeEl() {
//   console.log("onChangeEl");

//   if (dayEl.value != "" && pickupDateEl != "") {
//     inputEl.enabled;
//   }
//   console.log("onChangeEl");
// }

function onageSelectorElChecked() {
  console.log("onageSelectorElChecked Started");
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
  let basePrice = 2.25 + (numOfScoops - 1) * 1.25;

  //calc Topping Total

  //calc base price
  document.getElementById("basePrice").innerHTML = " " + basePrice.toFixed(2);

  //calc tax 6% for my area
  console.log("onsubmitOrderBtnClicked finished");

  //calc Total Due
}
