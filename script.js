"use strict";

const inputEmail = document.querySelector("#form__email--address");
const inputName = document.querySelector("#form__name");
const inputComment = document.querySelector("#form__comment");
const errorMessage = document.querySelector(".error__message");
const formElement = document.querySelector("form");
const btnSubmit = document.querySelector("#btn__submit");
const successfullMessage = document.querySelector(".successfull__message");
const bodyElement = document.querySelector("body");

const clearInputs = () => {
  inputEmail.value = "";
  inputName.value = "";
  inputComment.value = "";
};

const errorFunction = () => {
  errorMessage.classList.remove("hidden");
  errorMessage.innerHTML = "";
};

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!inputEmail.value.includes("@")) {
    errorFunction();
    errorMessage.innerHTML = "Please enter a valid email address";
    clearInputs();
  } else if (inputName.value.length <= 2 || inputName.value.length >= 50) {
    errorFunction();
    errorMessage.innerHTML = "Please enter a valid username";
    clearInputs();
  } else if (inputComment.value.length <= 50) {
    errorFunction();
    errorMessage.innerHTML =
      "Comment text must not be less than 50 characters ";
    clearInputs();
  } else if (inputComment.value.length >= 280) {
    errorFunction();
    errorMessage.innerHTML =
      "Comment text must not be longer than 280 characters";
    clearInputs();
  } else {
    errorMessage.innerHTML = "";
    formElement.classList.add("hidden");
    successfullMessage.classList.remove("hidden");
    successfullMessage.classList.add("flex");

    clearInputs();
  }
});
