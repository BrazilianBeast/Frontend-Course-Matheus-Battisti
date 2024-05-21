// Element selection
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

const multiplicatonTable = document.querySelector("#multiplication-operations");

// Functions
const createTable = (number, multiplicatorNumber) => {
  multiplicatonTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicatonTable.appendChild(row);
  }

  multiplicationTitle.innerHTML = number;
};
// Events
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
