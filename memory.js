const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jasker.png", "triss.png", "yen.png", "gerald.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWtaper = document.querySelector(".board");

cardsWtaper.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    const png = e.target;
    console.log(png);
  }
}

function ckick(nr) {
  alert(nr);
}
