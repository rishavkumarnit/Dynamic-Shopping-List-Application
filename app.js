const itemName = document.querySelector("#item-name-input");
const itemPrice = document.querySelector("#item-price-input");
const addButton = document.querySelector("#add-item");
const finalList = document.querySelector(".final-list");
const grandTotalField = document.querySelector("#Grand-total-price");
let total = 0;

addButton.addEventListener("click", (e) => {
  if (!itemName.value) {
    alert("please add item name");
    return;
  }
  if (!itemPrice.value) {
    alert("please add item price");
    return;
  }
  if (isNaN(itemPrice.value)) {
    alert("price should be an amount");
    return;
  }

  const outerDiv = document.createElement("div");
  outerDiv.classList.add("flex", "flex-row", "gap-2", "mb-2", "item-list");
  finalList.appendChild(outerDiv);

  if (finalList.childElementCount >= 10) {
    alert(
      "it's just a play ground !! 😁. Can't add more items."
    );
    finalList.innerHTML = "";
    grandTotalField.value = "";
    itemName.value = "";
    itemPrice.value = "";
    return;
  }

  const itemNameInput = document.createElement("input");
  itemNameInput.type = "text";
  itemNameInput.setAttribute("readonly", "readonly");
  itemNameInput.classList.add(
    "border",
    "w-2/3",
    "border-gray-300",
    "rounded-sm",
    "px-3",
    "py-1",
    "focus:outline-none",
    "bg-gray-200"
  );
  itemNameInput.value = itemName.value;
  outerDiv.appendChild(itemNameInput);
  itemName.value = "";

  const itemPriceInput = document.createElement("input");
  itemPriceInput.type = "text";
  itemPriceInput.setAttribute("readonly", "readonly");
  itemPriceInput.classList.add(
    "border",
    "w-1/3",
    "border-gray-300",
    "rounded-sm",
    "px-3",
    "py-1",
    "focus:outline-none",
    "bg-gray-200",
    "items-prices"
  );
  itemPriceInput.value = itemPrice.value;
  outerDiv.appendChild(itemPriceInput);
  itemPrice.value = "";

  total += parseFloat(itemPriceInput.value);
  grandTotalField.value = total.toFixed(2);
});
