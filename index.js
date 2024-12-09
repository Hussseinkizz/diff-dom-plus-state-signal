import { DiffDOM } from "diff-dom";
import { createSignal, effect } from "state-signal";

const countElement = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const minusBtn = document.getElementById("minusBtn");

const print = (...args) => console.log(...args);
const dd = new DiffDOM();

const count = createSignal(0);

effect(() => {
  let oldElement = countElement;
  countElement.innerHTML = `count: ${count.value}`;
  updateDom(oldElement, countElement);
});

// should still work even after dom update!
countElement.addEventListener("click", () => {
  print("count element clicked, resetting count!");
  count.value = 0;
});

addBtn.addEventListener("click", () => {
  print("add btn clicked!");
  count.value += 1;
});

minusBtn.addEventListener("click", () => {
  print("minus btn clicked!");
  count.value -= 1;
});

function updateDom(oldNode, newNode) {
  // Create the diff between the two nodes
  const diff = dd.diff(oldNode, newNode);

  // Apply the diff to the source node
  dd.apply(oldNode, diff);
}
