const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jasker.png", "triss.png", "yen.png", "gerald.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWtaper = document.querySelector(".board");

cardsWtaper.addEventListener("click", handleClick);

function createImg() {
  cards.forEach((element, index) => {
    const cardElement = document.createElement("img");
    cardElement.src = `img/${element}`;
    alert(element);
  });
}

function handleClick(e) {
  if (e.target.nodeName === "IMG") {
    const png = e.target[0];
    console.log(png);
  }
}

function ckick(nr) {
  alert(nr);
}
window.onload = createImg;
