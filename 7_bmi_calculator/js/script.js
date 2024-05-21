// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Element selection
const bmiTable = document.querySelector("#bmi-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const bmiNumber = document.querySelector("#bmi-number span");
const bmiInfo = document.querySelector("#bmi-info span");

const backBtn = document.querySelector("#back-btn");

// Functions
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    bmiTable.append(div);
  });
}

function cleanInputs() {
  heightInput.value = "";
  weightInput.value = "";
  bmiNumber.classList = "";
  bmiInfo.classList = "";
}

function validDigits(text) {
  return text.replace(/[^0-9.]/g, "");
}

function calcImc(weight, height) {
  const bmi = (weight / (height * height)).toFixed(1);
  return bmi;
}

function showOrHideResults() {
  calcContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");
}

// Initializing
createTable(data);

// Events
[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;
  });
});

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = +weightInput.value;
  const height = +heightInput.value;

  if (!weight || !height) return;

  const bmi = calcImc(weight, height);

  let info;

  data.forEach((item) => {
    if (bmi >= item.min && bmi <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  bmiNumber.innerText = bmi;
  bmiInfo.innerText = info;

  switch (info) {
    case "Magreza":
      bmiNumber.classList.add("low");
      bmiInfo.classList.add("low");
      break;
    case "Normal":
      bmiNumber.classList.add("good");
      bmiInfo.classList.add("good");
      break;
    case "Sobrepeso":
      bmiNumber.classList.add("low");
      bmiInfo.classList.add("low");
      break;
    case "Obesidade":
      bmiNumber.classList.add("medium");
      bmiInfo.classList.add("medium");
      break;
    case "Obesidade grave":
      bmiNumber.classList.add("high");
      bmiInfo.classList.add("high");
      break;
  }

  showOrHideResults();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  cleanInputs();
});

backBtn.addEventListener("click", () => {
  cleanInputs();
  showOrHideResults();
});
