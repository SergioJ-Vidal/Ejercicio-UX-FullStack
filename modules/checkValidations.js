import checkPattern from "./checkPattern.js";
let checkPositive;



export default function checkValidations(e, button, span) {
  let pattern = e.target.pattern;
  const regex = new RegExp(pattern);
  if (regex.exec(e.target.value)) {
    checkPositive = checkPattern(e, span, "regexPass");
  }
  if (!regex.exec(e.target.value) || e.target.value == "") {
    checkPositive = checkPattern(e, span, "regexRejected");
  }
  if (e.target.value === "") {
    span.classList.remove("is-active");
  }
   
  if (checkPositive) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
}

