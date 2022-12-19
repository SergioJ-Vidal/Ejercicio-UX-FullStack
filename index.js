import countrySelector from "./modules/countrySelector.js";
import sendData from "./modules/sendData.js";

const $form = document.querySelector(".form");
const $inputs = document.querySelectorAll(".form > input[required]");
const $button = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
    countrySelector();
    sendData($form, $inputs, $button);
});