const cards = ["ciri.png", "geralt.png", "ciri.png", "iorweth.png", "jaskier.png", "jaskier.png", "triss.png", "yen.png", "geralt.png", "iorweth.png", "triss.png", "yen.png"];

const cardsWrapper = document.querySelector(".board");

let clickedCard = -1;
let turnCounter = 0;

cardsWrapper.addEventListener("click", handleClick);

function handleClick(e) {
  const el = e.target.id;

  const cardElement = document.createElement("img");
  cardElement.src = `img/${cards[Number(el)]}`;
  document.getElementById(el).appendChild(cardElement);
  $("#" + el).addClass("card-a");

  if (clickedCard === -1) {
    clickedCard = el;
  } else {
    turnCounterOnClick();
    var first = el;
    var second = clickedCard;
    if (cards[second] === cards[first] && second !== first) {
      console.log("Match found");
      setTimeout(() => {
        hiddenMatchedCards(first, second);
      }, 1000);
    } else {
      setTimeout(() => {
        cardsNoMatch(first, second);
      }, 1000);
      console.log("No match");
    }
    clickedCard = -1;
  }
}
function turnCounterOnClick() {
  turnCounter++;
  $(".score").html("Turn counter: " + turnCounter);
}

function hiddenMatchedCards(fst, snd) {
  document.getElementById(fst).style.visibility = "hidden";
  document.getElementById(snd).style.visibility = "hidden";
}

function cardsNoMatch(fst, snd) {
  document.getElementById(fst).innerHTML = "";
  document.getElementById(snd).innerHTML = "";
}
