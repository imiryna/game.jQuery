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

//tasks

const obj1 = {
  name: "Iryna",
  age: 25,
};
const obj2 = {
  age: 30,
  profession: "Developer",
};

function mergeObjects(obj1, obj2) {
  const merge = Object.assign({}, obj1, obj2);
  return merge;
}

// Для виклику: mergeObjects(obj1, obj2);
// Поверне: { name: "Iryna", age: 30, profession: "Developer" }

const person = {
  name: "Iryna",
  age: 25,
  profession: "Developer",
};

function getValue(person) {
  function getValue(person, s) {
    //   const key = person[s];
    //  if (key) return key;

    //  if (!key) return "Key not found";

    return person[s] !== undefined ? person[s] : "Key not found";
  }
}

// Для виклику: getValue(person, "name");   // Поверне "Iryna"
// Для виклику: getValue(person, "salary"); // Поверне "Key not found"
