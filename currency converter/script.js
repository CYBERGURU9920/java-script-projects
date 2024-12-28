import { countryList } from './codes.js';

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        select.append(newoption);
    }
}

for (let code in countryList) {
    console.log(code);
}