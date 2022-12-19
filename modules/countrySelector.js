const d = document;
import { countries } from "../countries/countries.js";
import countriesModal from "./countriesModal.js";

const $modal = d.getElementById("modal-countries");
const $header = document.getElementById("header");
const $form = document.querySelector(".form");
const $formHeader = document.querySelector(".form-header");

export default function countrySelector() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".country-container")) {
      countriesModal(countries, $modal);
      $modal.classList.remove("hide");
      $header.style.filter = "blur(2px)";
      $form.style.filter = "blur(2px)";
      $formHeader.style.filter = "blur(2px)";
    }
    if (!e.target.matches(".country-container")) {
      setTimeout(() => {
        $modal.classList.add("hide");
        $header.style.filter = "";
        $form.style.filter = "";
        $formHeader.style.filter = "";
      }, 200);
    }
  });
}
