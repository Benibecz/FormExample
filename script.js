"use strict";

const inputEmail = document.querySelector("#form__email--address");
const inputName = document.querySelector("#form__name");
const inputText = document.querySelector("#form__comment");
const btnSubmit = document.querySelector("#btn__submit");
const errorMessage = document.querySelector(".error__message");
const successfulMessage = document.querySelector(".successfull__message");
const formElement = document.querySelector("form");
const checkBox = document.querySelector("#form__terms--conditions");

const clearInputs = function () {
  inputEmail.textContent = "";
  inputName.textContent = "";
  inputText.textContent = "";
};

const errorFunction = function () {
  errorMessage.classList.remove("hidden");
  errorMessage.textContent = "";
};

const messageFunction = function (a, b) {
  return `${a} must be ${b} characters`;
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputText.value.replaceAll("/", ""));

  if (!inputEmail.value.includes("@")) {
    errorFunction();
    errorMessage.textContent = "Please enter a valid email address";
  } else if (
    (inputName.value.length > 0 && inputName.value.length < 2) ||
    inputName.value.length >= 50
  ) {
    const type =
      (inputName.value.length < 2 && "at least 2") ||
      (inputName.value.length >= 50 && "no longer than 50");
    errorFunction();
    errorMessage.textContent = messageFunction("username", type);
  } else if (inputText.value.length <= 50 || inputText.value.length >= 280) {
    const type =
      (inputText.value.length <= 50 && "at least 50") ||
      (inputText.value.length >= 280 && "less than 280");
    errorFunction();
    errorMessage.textContent = messageFunction("comment", type);
  } else if (inputText.value.includes("/")) {
    errorFunction();
    errorMessage.textContent = "Comment must not contain links";
  } else if (checkBox.checked === false) {
    errorFunction();
    errorMessage.textContent = "Terms & Conditions tick-box must be ticked";
  } else {
    formElement.classList.add("hidden");
    successfulMessage.classList.remove("hidden");
    successfulMessage.classList.add("flex");
  }
});
