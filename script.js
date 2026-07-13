"use strict";
const output = document.querySelector(".output");
const dispBmi = document.querySelector(".bmi > h2");
const dispDesc = document.querySelector(".bmi > p");
const heightInp = document.querySelector("#height");
const weightInp = document.querySelector("#weight");
const btn = document.querySelector("#submit");
const err = document.querySelector(".error");

const calcBmi = function (height, weight) {
  return parseFloat((weight / (height / 100) ** 2).toFixed(1));
};

const getBmiDesc = function (bmi) {
  return `${bmi >= 30.0 ? "You're Obese" : bmi >= 25.0 && bmi <= 29.9 ? "You're Overweight" : bmi >= 18.5 && bmi <= 24.9 ? "You have normal weight" : "You're Underweight"}`;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const height = Number(heightInp.value);
  const weight = Number(weightInp.value);

  // Missing inputs
  if (heightInp.value === "" || weightInp.value === "") {
    err.innerHTML = "Fields must not be empty!";
    err.classList.add("active");
    // Invalid number
  } else if (height <= 0 || weight <= 0) {
    err.innerHTML = "Not a valid weight or height!";
    err.classList.add("active");
  } else {
    // Remove active class from error
    err.classList.remove("active");

    // Display
    output.style.display = "flex";
    dispBmi.innerHTML = calcBmi(height, weight);
    dispDesc.innerHTML = getBmiDesc(bmi);
  }
});
