console.log("connected script js");

const allButton = document.getElementsByClassName("add-btn");
console.log(allButton);

let count = 0;
for (let button of allButton) {
  console.log(button);
  button.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);

    const placeName = event.target.parentNode.childNodes[1].innerText;
    console.log(placeName);

    const placeCost =
      event.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(placeCost);

    const selectedPlaceContainer = document.getElementById(
      "selected-place-container"
    );
    console.log(selectedPlaceContainer);

    const li = document.createElement("li");
    const p1 = document.createElement("p1");
    const p2 = document.createElement("p2");

    p1.innerText = placeName;
    p2.innerText = placeCost;

    li.appendChild(p1);
    li.appendChild(p2);
    selectedPlaceContainer.appendChild(li);

    const totalCost = document.getElementById("total-cost");
    console.log(totalCost);

    let totalCostNumber = parseInt(totalCost.innerText);
    let placeCostNumber = parseInt(placeCost);

    let sum = totalCostNumber + placeCostNumber;
    console.log(sum);

    // update the selected cart in the ui
    count = count + 1;

    // document.getElementById('cart-count').innerText = count;
    setInnerTextById("cart-count", count);

    // document.getElementById("total-cost").innerText = sum;
    setInnerTextById("total-cost", sum);
  });
}
