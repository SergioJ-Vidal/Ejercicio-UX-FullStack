import selectCountry from "./selectCountry.js";

export default function countriesModal(countries, modal) {
  modal.innerHTML = "";
  countries.forEach((country) => {
    const $p = document.createElement("p");
    const $country = document.createTextNode(country);
    $p.style.textAlign = "left";
    $p.style.padding = "0.5rem";
    $p.appendChild($country);
    modal.appendChild($p);

    selectCountry($p, country);
  });
}
