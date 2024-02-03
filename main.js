const card = document.getElementsByClassName("project-card");

function alertFromButton(e) {
  console.log("sl");
  alert("clicked");
}

const buttons = document.getElementsByClassName("test-button");
Array.prototype.forEach.call(buttons, (el) =>
  el.addEventListener("click", () => {
    alert(1);
  }),
);

//과연 이것도 동작할까?
Array.from(buttons).forEach((el) =>
  el.addEventListener("click", () => {
    alert("array from");
  }),
);
