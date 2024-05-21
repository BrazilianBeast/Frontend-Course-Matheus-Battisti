const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    // selected button
    const button = e.target;

    const id = button.getAttribute("id");
    console.log(id);

    // Adds blue selected class
    button.querySelector(".color").classList.add("selected");

    // #Start transition effect
    image.classList.add("changing");

    // Change image
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
