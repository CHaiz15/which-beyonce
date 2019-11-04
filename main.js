var directionBtn = document.querySelector('#direction-btn');
var secondBtn = document.querySelector('#second-btn');
var mainSection = document.querySelector('.main-section');
var cardContainer = document.querySelector('.card-container');
var playerOneInput = document.querySelector('.player-one-input');
var inputError = document.querySelector('#error');
var inputDiv = document.querySelector('.input-div');
var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');
var flippedCard = false;
var firstCard;
var secondCard;
var matchesThisRound = 0;
var deck = new Deck();
var cardID = 0;

directionBtn.addEventListener('click', openDirections);

function instantiateCards() {
  for (var i = 0; i < 10; i++) {
  cardID++;
  if (cardID === 6) {
    cardID = 1;
  }
  var newCard = new Card(cardID);
  deck.cards.push(newCard);
  // appendCard(newCard);
  mainSection.innerHTML += `
  <div class="card card${deck.cards[i].matchInfo}" data-name="${deck.cards[i].matchInfo}">
  <img class="back-card" src="./assets/questionMark.jpg">
  <img class="front-card" src="./assets/bey${deck.cards[i].matchInfo}.jpg">
  </div>`

  // console.log(deck.cards[i].matchInfo);
  // if (deck.cards[i].matchInfo === 6) {
  //   deck.cards[i].matchInfo = 1;
  // }
  var cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', flipCard));
  }
}

// function appendCard() {
//   mainSection.innerHTML += `
//   <div class="card card${deck.cards[0].matchInfo}" data-name="${deck.cards.matchInfo}">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey${deck.cards.matchInfo}.jpg">
//   </div>`
// }

function openDirections() {
  event.preventDefault();
  if (playerOneInput.value === "") {
    inputError.classList.remove('error-msg');
    inputDiv.style.marginBottom = '0px';
  } else if (playerOneInput.value !== "") {
    mainSection.style.marginTop = '75px';
    mainSection.innerHTML = `<div class="directions-div"><h2>WELCOME ${playerOneInput.value.toUpperCase()}!</h2>
      <p class="directions-p">The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
      <p class="directions-p">To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé.
      Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at
      them before they flip back over. Then it’s time for the other player to try!</p>
      <p class="directions-p">After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
      <div class="play-div">
        <button id="play-btn" type="button" name="button">PLAY GAME</button>
      </div>
      </div>
      `
  }
  startGame();
}

function startGame() {
  var playBtn = document.querySelector('#play-btn');
  playBtn.addEventListener('click', openGame);
}

function openGame(card) {
  console.log(matchesThisRound);
  mainSection.classList.add('game-page');
  mainSection.style.justifyContent = 'flex-start';
  mainSection.innerHTML = `<section class="game-info">
    <h3 id="line">${playerOneInput.value}</h3>
    <h3>MATCHES THIS ROUND</h3>
    <h1 id="line">${matchesThisRound.value}</h1>
    <h3>GAME WINS</h3>
  </section>
  <section class="card-container">
    <section class="row1">

    </section>
    <section class="row2">

    </section>
    <section class="row3">

    </section>
  </section>`
  instantiateCards();
}

function flipCard() {
  this.classList.add('flipped');
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    console.log(firstCard);
  } else {
    flippedCard = false;
    secondCard = this;
    console.log(secondCard);
  }
  if (firstCard.dataset.name === secondCard.dataset.name) {
    console.log(firstCard.dataset.name, secondCard.dataset.name)
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchesThisRound += 1;
    console.log(matchesThisRound);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
    }, 1500);
  }
}






// <section class="row1">
//   <div class="card card1" data-name="bey1">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey1.jpg">
//   </div>
//   <div class="card card2" data-name="bey2">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey2.jpg">
//   </div>
//   <div class="card card3" data-name="bey3">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey3.jpg">
//   </div>
// </section>
// <section class="row2">
//   <div class="card card4" data-name="bey4">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey4.jpg">
//   </div>
//   <div class="card card5" data-name="bey5">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey5.jpg">
//   </div>
//   <div class="card card6" data-name="bey1">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey1.jpg">
//   </div>
//   <div class="card card7" data-name="bey2">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey2.jpg">
//   </div>
// </section>
// <section class="row3">
//   <div class="card card8" data-name="bey3">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey3.jpg">
//   </div>
//   <div class="card card9" data-name="bey4">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey4.jpg">
//   </div>
//   <div class="card card10" data-name="bey5">
//   <img class="back-card" src="./assets/questionMark.jpg">
//   <img class="front-card" src="./assets/bey5.jpg">
//   </div>
// </section>
