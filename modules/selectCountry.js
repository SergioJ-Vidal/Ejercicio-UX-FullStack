const $countrySelected = document.getElementById("select-country");

export default function selectCountry(p, country) {
  p.addEventListener("click", () => {
    const check = "&#10003;";
    const whiteSpace = "&nbsp";
    p.innerHTML += `${whiteSpace}${whiteSpace}${whiteSpace}${whiteSpace}${check}`;
    $countrySelected.value = country;
  });
}
