const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jaskier.png", "triss.png", "yen.png", "geralt.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWtaper = document.querySelector(".board");

let clickedCard = -1;

// function memori() {
//   cards.forEach((img) => {
//     const cardElement = document.createElement("img");
//     cardElement.src = `img/${img}`;
//   });
//   return;
// }

cardsWtaper.addEventListener("click", handleClick);

function handleClick(e) {
  const el = e.target.id;

  const cardElement = document.createElement("img");
  cardElement.src = `img/${cards[Number(el)]}`;
  document.getElementById(el).appendChild(cardElement);

  if (clickedCard === -1) {
    clickedCard = el;
  } else {
    if (cards[clickedCard] === cards[el]) {
      console.log("Match found");
      setTimeout(() => {
        hiddenMatchedCards(clickedCard, el);
      }, 1000);
    } else {
      setTimeout(() => {
        cardsNoMatch(clickedCard, el);
      }, 1000);
      console.log("No match");
    }
  }
}

function hiddenMatchedCards(clickedCard, el) {
  document.getElementById(clickedCard).style.visibility = "hidden";
  document.getElementById(el).style.visibility = "hidden";
  clickedCard = -1;
}

function cardsNoMatch(clickedCard, el) {
  document.getElementById(clickedCard).innerHTML = "";
  document.getElementById(el).innerHTML = "";
  clickedCard = -1;
}
