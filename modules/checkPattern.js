import passwordEqual from "./passwordEqual.js";
import passwordValidation from "./passwordValidation.js";

const $divPassword = document.getElementById("validation-password");
const $passwordValue = document.querySelector(".password-container>input");

let nameCheck = false;
let surnameCheck = false;
let emailCheck = false;
let passwordCheck = false;
let passwordConfirm = false;
let confirmCheck = false;

export function checkBox(check, button) {
  if (check === true) {
    confirmCheck = true;
  } else {
    confirmCheck = false;
  }
  let validation = checkPattern();

  if (validation && confirmCheck) {
    button.removeAttribute("disabled");
  }
  if (!validation || !confirmCheck) {
    button.setAttribute("disabled", "");
  }
  return confirmCheck;
}

export default function checkPattern(e, span, conditional) {
  if (conditional === "regexPass") {
    span.classList.remove("is-active");
    switch (e.target.name) {
      case "name":
        nameCheck = true;
        break;
      case "surname":
        surnameCheck = true;
        break;
      case "email":
        emailCheck = true;
      default:
        break;
    }

    if (e.target.name === "password") {
      $divPassword.classList.replace("none", "active");
      passwordCheck = passwordValidation(e, $divPassword);
    }
    if (e.target.name === "passwordConfirm") {
      passwordConfirm = passwordEqual(e, $passwordValue);
    }
  }

  if (conditional === "regexRejected") {
    span.classList.add("is-active");
    switch (e.target.name) {
      case "name":
        nameCheck = false;
        break;
      case "surname":
        surnameCheck = false;
        break;
      case "email":
        emailCheck = false;
        break;
      default:
        break;
    }

    if (e.target.name === "password") {
      $divPassword.classList.replace("active", "none");
    }
  }

  if (
    nameCheck &&
    surnameCheck &&
    emailCheck &&
    passwordCheck &&
    passwordConfirm &&
    confirmCheck
  ) {
    return true;
  }
  if (
    !nameCheck ||
    !surnameCheck ||
    !emailCheck ||
    passwordCheck ||
    passwordConfirm ||
    confirmCheck
  ) {
    return false;
  }
}
