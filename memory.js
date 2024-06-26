const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jaskier.png", "triss.png", "yen.png", "geralt.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWrapper = document.querySelector(".board");
const scoreElement = document.querySelector(".score");

let clickedCard = -1;
let turnCounter = 0;

cardsWrapper.addEventListener("click", handleClick);

function handleClick(e) {
  const el = e.target.id;

  const cardElement = document.createElement("img");
  cardElement.src = `img/${cards[Number(el)]}`;
  document.getElementById(el).appendChild(cardElement);

  if (clickedCard === -1) {
    clickedCard = el;
  } else {
    turnCounterOnClick();
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
    // clickedCard = -1;
  }
}
function turnCounterOnClick() {
  turnCounter++;
  scoreElement.innerHTML = `Turn counter: ${turnCounter}`;
}

function hiddenMatchedCards(clickedCard, el) {
  document.getElementById(clickedCard).style.visibility = "hidden";
  document.getElementById(el).style.visibility = "hidden";
  // clickedCard = -1;
}

function cardsNoMatch(clickedCard, el) {
  document.getElementById(clickedCard).innerHTML = "";
  document.getElementById(el).innerHTML = "";
  // clickedCard = -1;
}
