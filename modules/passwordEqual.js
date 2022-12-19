const $parentCheck = document.querySelector(".passwordConfirm-container");
const $locker2 = document.querySelector(".locker-2");
const $span = document.createElement("span");
$span.textContent = "Password doesn´t match";
$span.classList.add("contact-form-error", "none");
$parentCheck.insertAdjacentElement("afterend", $span);

let toggleInput = ["text", "password"];
let toggleLocker = ["&#x1F513;", "&#128272;"];
let j = 0;

$locker2.addEventListener("click", () => {
    if (j === 2) {
      j = 0;
    }
    $parentCheck.childNodes[1].type = toggleInput[j];
    $locker2.innerHTML = toggleLocker[j];
    j++;
  });

export default function passwordEqual(passwordConfirm, passwordValue) {
  if (passwordConfirm.target.value === passwordValue.value) {
    $span.classList.remove("is-active");
    return true;
  } else {
    $span.classList.add("is-active");
  }
  if (passwordConfirm.target.value === "") {
    $span.classList.remove("is-active");
  }
}
