console.log("connected script js");

const allAddButtons = document.getElementsByClassName("add-btn");
// console.log(allAddButtons);

let count = 0;
for (let oneAddButton of allAddButtons) {
  // console.log(oneAddButton);
  oneAddButton.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);

    const placeName = event.target.parentNode.childNodes[1].innerText;
    // console.log(placeName);

    const placeCost =
      event.target.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(placeCost);

    // validation
    const budget = document.getElementById("budget").innerText;
    let budgetLimit = parseFloat(budget) - parseFloat(placeCost);

    if (budgetLimit < 0) {
      alert("budget is over...");
      return;
    }
    document.getElementById("budget").innerText = budgetLimit;

    // create dynamic list under container
    const selectedPlaceContainer = document.getElementById(
      "selected-place-container"
    );
    console.log(selectedPlaceContainer);

    // step 01 : create element
    const li = document.createElement("li");
    const p1 = document.createElement("p1");
    const p2 = document.createElement("p2");

    // step 02 : set innerText
    p1.innerText = placeName;
    p2.innerText = placeCost;

    // step 03 : appendChild the element
    li.appendChild(p1);
    li.appendChild(p2);
    selectedPlaceContainer.appendChild(li);

    // invoke function to update cost
    totalCost("total-cost", parseFloat(placeCost));
    // grandTotalCost("grand-total", parseFloat(placeCost));
    grandTotalCost();

    // update the total cost
    // const totalCost = document.getElementById("total-cost").innerText;
    // console.log(totalCost);
    // let sum = parseFloat(totalCost) + parseFloat(placeCost);
    // console.log(sum);
    // setInnerTextById("total-cost", sum);

    // update the grand total
    // const grandTotal = document.getElementById("grand-total").innerText;
    // console.log(grandTotal);
    // let sum2 = parseFloat(grandTotal) + parseFloat(placeCost);
    // console.log(sum2);
    // setInnerTextById("grand-total", sum2);

    // update the cart count
    // document.getElementById('cart-count').innerText = count;
    setInnerTextById("cart-count", count);
  });
}

// ...............................................................
// fuction starts here
// ...............................................................

// utf 01
function setInnerTextById(id, value) {
  let result = (document.getElementById(id).innerText = value);
  return result;
}

// utf 02
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  console.log(totalCost);
  let sum = parseFloat(totalCost) + parseFloat(value);
  console.log(sum);
  setInnerTextById("total-cost", sum);
}

// utf 03
// function grandTotalCost(id, value) {
//   const grandTotal = document.getElementById(id).innerText;
//   console.log(grandTotal);
//   let sum2 = parseFloat(grandTotal) + parseFloat(value);
//   console.log(sum2);
//   setInnerTextById("grand-total", sum2);
// }

// utf 03 alternatinve
function grandTotalCost(category) {
  console.log(category);

  const totalCost = document.getElementById("total-cost").innerText;
  const convertedTotalCost = parseFloat(totalCost);

  if (category === "bus") {
    setInnerTextById("grand-total", convertedTotalCost + 100);
  } else if (category === "train") {
    setInnerTextById("grand-total", convertedTotalCost - 200);
  } else if (category === "flight") {
    setInnerTextById("grand-total", convertedTotalCost + 500);
  } else {
    setInnerTextById("grand-total", convertedTotalCost);
  }
}
