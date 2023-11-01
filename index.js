const boxes = document.querySelectorAll(".box");
const row = document.querySelectorAll(".row");
const turn = document.createElement("p");
// boxes.forEach((box) => {
//  box.addEventListener("drop", (event) => {
//  event.target.appendChild(row);
//  });
//  // Allow drop
//  box.addEventListener("dragover", (event) => {
//  event.preventDefault();
//  });
// })l;

boxes.forEach((box) => {
  box.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const row = document.querySelector(`#${id}`);
    event.target.appendChild(row);
    turn.innerText = "Turns";
  });

  box.addEventListener("dragover", function (event) {
    if (event.target === this) {
      event.preventDefault();
    }
  });
});
row.forEach((rows) => {
  rows.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });
});
