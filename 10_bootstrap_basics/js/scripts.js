console.log("Hello");

const url =
  "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2I3ZTBmNjk3NWVjNjExYjY2NWUzZWRhZmYyMWMzYiIsInN1YiI6IjY2NTBlYmMyZWU4MmI0NWViMjI2YjlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ny5px_CSn6cre4HQXO99SBXSdMcqm4jjzkO9uequbf4",
  },
};
const imageUrl = "https://image.tmdb.org/t/p/w1280/";

function convertDateFormat(dateString) {
  // Divide a string da data em componentes
  const [year, month, day] = dateString.split("-");

  // Reorganiza os componentes no formato "dia-mês-ano"
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

async function getMovies() {
  const imageGridContainer = document.querySelector("#my-grid");
  const resp = await fetch(url, options);
  const respData = await resp.json();

  console.log(respData);

  let row;
  for (let i = 0; i < respData.results.length; i++) {
    const movie = respData.results[i];

    if (i % 4 == 0) {
      //Create row
      row = document.createElement("div");
      row.classList.toggle("row");
      row.classList.toggle("align-items-start");
      imageGridContainer.appendChild(row);
    }

    // Create column
    const column = document.createElement("div");
    column.classList.add("col");

    // Create card
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-4");
    card.classList.add("rounded-3");
    card.classList.add("shadow-sm");

    //Create card body
    // const cardBody = document.createElement("div");
    // cardBody.classList.add("card-body");

    // Create image
    const img = document.createElement("img");
    img.src = imageUrl + movie.poster_path;
    img.classList.toggle("img-thumbnail");

    const link = document.createElement("a");
    link.target = "blank";
    link.href = `https://www.google.com/search?q=${movie.title}`;
    link.role = "button";
    link.classList.toggle("btn");
    link.classList.toggle("btn-outline-secondary");
    link.classList.toggle("stretched-link");
    link.appendChild(img);

    const position = document.createElement("h5");
    position.className = "mt-2 fw-bold";
    position.innerText = `${i + 1}°`;

    //Create footer title
    const title = document.createElement("h4");
    // title.classList.toggle("my-0");
    title.classList.toggle("fw-normal");
    title.innerText = movie.title;

    // Add relese date
    const dateString = document.createElement("h5");
    dateString.classList.toggle("fw-light");
    dateString.innerText = convertDateFormat(movie.release_date);

    //Create card footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    cardFooter.classList.add("py-3");
    cardFooter.classList.add("d-flex");
    cardFooter.classList.add("justify-content-between");

    const mainFooterSection = document.createElement("div");
    mainFooterSection.classList.toggle("main-footer-section");
    mainFooterSection.classList.toggle("text-start");
    mainFooterSection.appendChild(title);
    mainFooterSection.appendChild(dateString);

    cardFooter.appendChild(mainFooterSection);
    cardFooter.appendChild(position);
    // cardBody.appendChild(img);
    // card.appendChild(cardBody);
    card.appendChild(link);
    card.appendChild(cardFooter);

    column.appendChild(card);

    // Adiciona a coluna à row atual
    row.appendChild(column);
  }

  return respData;
}

getMovies();
