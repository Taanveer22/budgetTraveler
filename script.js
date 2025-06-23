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
    console.log(placeName);

    const placeCost =
      event.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(placeCost);

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

    // update the total cost
    const totalCost = document.getElementById("total-cost").innerText;
    console.log(totalCost);

    let sum = parseFloat(totalCost) + parseFloat(placeCost);
    console.log(sum);

    // document.getElementById("total-cost").innerText = sum;
    setInnerTextById("total-cost", sum);

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
