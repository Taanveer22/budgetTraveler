console.log("utilities js connected");

// utf 01
function setInnerTextById(id, value) {
  let result = (document.getElementById(id).innerText = value);
  return result;
}
