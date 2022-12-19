const $barProgress = document.querySelector(".content-bar-progress");
const $locker = document.querySelector(".locker");
const $divPasswordContainer = document.querySelector(".password-container");

let width;
let color;
let i = 0;
let check1 = false;
let check2 = false;
let check3 = false;
let once1 = false;
let once2 = false;
let once3 = false;
let toggleInput = ["text", "password"];
let toggleLocker = ["&#x1F513;", "&#128272;"];
let j = 0;

$locker.addEventListener("click", () => {
  if (j === 2) {
    j = 0;
  }
  $divPasswordContainer.childNodes[1].type = toggleInput[j];
  $locker.innerHTML = toggleLocker[j];
  j++;
});

export default function passwordValidation(e, parentDiv) {
  const upperAndLowerCase = /([A-Z].*[a-z]|[a-z].*[A-Z])/;
  const oneNumberMinimum = /\d/;
  const checkLetters = new RegExp(upperAndLowerCase);
  const checkNumber = new RegExp(oneNumberMinimum);
  if (e.target.value.length >= 8) {
    parentDiv.childNodes[3].setAttribute("id", "check-1");
    check1 = true;
    if (!once1) {
      i++;
      once1 = true;
    }
  } else {
    parentDiv.childNodes[3].setAttribute("id", "");
    check1 = false;
    if (once1) {
      i--;
      once1 = false;
    }
  }
  if (checkLetters.test(e.target.value)) {
    parentDiv.childNodes[5].setAttribute("id", "check-2");
    check2 = true;
    if (!once2) {
      i++;
      once2 = true;
    }
  } else {
    parentDiv.childNodes[5].setAttribute("id", "");
    check2 = false;
    if (once2) {
      i--;
      once2 = false;
    }
  }
  if (checkNumber.test(e.target.value)) {
    parentDiv.childNodes[7].setAttribute("id", "check-3");
    check3 = true;
    if (!once3) {
      i++;
      once3 = true;
    }
  } else {
    parentDiv.childNodes[7].setAttribute("id", "");
    check3 = false;
    if (once3) {
      i--;
      once3 = false;
    }
  }

  if (i < 0) {
    i = 0;
  }

  if (i === 0) {
    width = 0;
    color = "grey";
    $barProgress.style.cssText = `width:${
      width + "%"
    };background-color:${color}; height: 0.5rem; border-radius:5px;`;
  }
  if (i === 1) {
    width = 35;
    color = "red";
    $barProgress.style.cssText = `width:${
      width + "%"
    };background-color:${color}; height: 0.5rem; border-radius:5px;`;
  }
  if (i === 2) {
    width = 75;
    color = "red";
    $barProgress.style.cssText = `width:${
      width + "%"
    };background-color:${color}; height: 0.5rem;
    border-radius:5px;`;
  }
  if (i === 3) {
    width = 100;
    color = "green";
    $barProgress.style.cssText = `width:${
      width + "%"
    };background-color:${color}; height: 0.5rem; border-radius:5px;`;
  }

  if (check1 && check2 && check3) {
    setTimeout(() => {
      parentDiv.classList.replace("active", "none");
    }, 1000);
    return true;
  }

  if (!check1 && !check2 && !check3) {
    return false;
  }
}
