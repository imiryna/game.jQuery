const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jaskier.png", "triss.png", "yen.png", "geralt.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWtaper = document.querySelector(".board");

function memori() {
  cards.forEach((img) => {
    const cardElement = document.createElement("img");
    cardElement.src = `img/${img}`;
    // cardElement.document.querySelector(".card").innerHTML = cardElement;
  });
  return;
}

cardsWtaper.addEventListener("click", handleClick);

function handleClick(e) {
  const el = e.target.id;
  const cardElement = document.createElement("img");
  cardElement.src = `img/${cards[Number(el)]}`;
  document.getElementById(el).appendChild(cardElement);
}

// function createImg() {
//   cards.forEach((element, index) => {
//     const cardElement = document.createElement("img");
//     cardElement.src = `img/${element}`;
//   });
//   cardElement.addEventListener("click", handleClick);
//   cardsWtaper.appendChild(cardElement);
// }

// function handleClick(e) {
//   if (e.target.nodeName === "IMG") {
//     const png = e.target.id;
//     console.log(png);
//   }
// }

// window.onload = handleClick;
