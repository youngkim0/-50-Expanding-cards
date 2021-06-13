const cards = document.getElementsByClassName("card");

for (let card of cards) {
  card.addEventListener("click", () => {
    if (document.querySelector(".active")) {
      const currentActive = document.querySelector(".active");

      currentActive.classList.remove("active");
    }
    card.classList.add("active");
  });
}
