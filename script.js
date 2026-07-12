"use strict";
const heightInp = document.querySelector("#height");
const weightInp = document.querySelector("#weight");
const btn = document.querySelector("#submit");
const err = document.querySelector(".error");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const height = Number(heightInp.value);
  const weight = Number(weightInp.value);

  if (height <= 0 || weight <= 0) {
    err.innerHTML = "Fields must not be empty!";
    err.classList.add("active");
  }
});

// Missing inputs
