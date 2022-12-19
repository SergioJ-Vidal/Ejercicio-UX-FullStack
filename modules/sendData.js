import inputsAndNodes from "./inputsAndNodes.js";

export default function sendData(form, inputs, button) {
  inputsAndNodes(inputs, button);
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const convert = new FormData(form);
    const object = Object.fromEntries(convert);
    let userData;
    for (let key in object) {
      userData = {
        ...userData,
        [key]: object[key].toLowerCase(),
      };
    }
  });
}
