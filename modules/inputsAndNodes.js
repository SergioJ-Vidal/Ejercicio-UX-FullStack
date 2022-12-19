import { checkBox } from "./checkPattern.js";
import checkValidations from "./checkValidations.js";
const $button = document.getElementById('submit');

const $passwordInput = document.querySelector(
  ".password-container>input[required]"
);
const $passwordConfirm = document.querySelector(
  ".passwordConfirm-container >input[required]"
);

const $confirmCheck = document.querySelector(
  ".confirm-container>input[required]"
);

$confirmCheck.addEventListener('click',()=>{
  checkBox($confirmCheck.checked,$button)
})

export default function inputsAndNodes(inputs, button) {
  const myInputs = [...inputs, $passwordInput, $passwordConfirm,$confirmCheck];
  myInputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
    if (input.name === "passwordConfirm" || input.name ==="confirm") {
      input.nextElementSibling.remove();
    }  
    input.addEventListener("keyup", (e) => {      
      checkValidations(e, button, $span);
    });
  });
}
