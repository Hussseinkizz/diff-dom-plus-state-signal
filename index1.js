"use strict";

import { DiffDOM } from "diff-dom";

const print = (...args) => console.log(...args);

print("hello js!");

const dd = new DiffDOM();
const source = document.getElementById("source");
const target = document.getElementById("target");
const btn = document.getElementById("btn");

const updateDom = (oldNode, newNode) => {
  // Create the diff between the two nodes
  const diff = dd.diff(oldNode, newNode);

  // Apply the diff to the source node
  dd.apply(oldNode, diff);
};

btn.addEventListener("click", () => updateDom(source, target));

source.addEventListener("click", () => print("source clicked!")); // should still work after dom update
target.addEventListener("click", () => print("target clicked!")); // should still work after dom update
