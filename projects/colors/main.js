import { colorTable } from "./colorTable.js";

const button = document.querySelector("button");

let index = 0;

function getNextColor(e) {
  const keys = Object.keys(colorTable);
  e.target.parentNode.style.backgroundColor = colorTable[keys[index++]];
  index %= keys.length;
}

button.addEventListener("click", getNextColor);
