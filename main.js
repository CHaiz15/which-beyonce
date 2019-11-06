var directionBtn = document.querySelector('#direction-btn');
var secondBtn = document.querySelector('#second-btn');
var mainSection = document.querySelector('.main-section');
var playerOneInput = document.querySelector('.player-one-input');
var inputError = document.querySelector('#error');
var inputDiv = document.querySelector('.input-div');
var hamburger = document.querySelector('.hamburger');
var scoreBoard = document.querySelector('.scoreboard');
var flippedCard = false;
var firstCard;
var secondCard;
var matchesThisRound = 0;
var deck = new Deck();
var matchInfo = 0;
var cards = document.querySelectorAll('.card');
var playerArray = JSON.parse(localStorage.getItem("playerArray")) || [];

directionBtn.addEventListener('click', openDirections);
hamburger.addEventListener('click', dropDown);

function compare( a, b ) {
  if ( a.secondsOnly < b.secondsOnly ){
    return -1;
  }
  if ( a.secondsOnly > b.secondsOnly ){
    return 1;
  }
  return 0;
}

function dropDown() {
  playerArray.sort(compare);
  scoreBoard.classList.toggle('show-score');
  for (var i = 0; i < 5; i++) {
    scoreBoard.innerHTML += `<p>${playerArray[i].name} ${playerArray[i].time}</p>`;
  }
}

var min = 0;
var second = 00;
var counterId = setInterval(function(){
countUp();
}, 1000);

function countUp () {
  second++;
  if(second == 59){
    second = 00;
    min = min + 1;
  }
}

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
  countUp();
  startGame();
}

function startGame() {
  var playBtn = document.querySelector('#play-btn');
  playBtn.addEventListener('click', openGame);
}

function openGame(card) {
  mainSection.classList.add('game-page');
  mainSection.style.justifyContent = 'flex-start';
  mainSection.style.marginTop = '30px';
  mainSection.innerHTML = `<section class="game-info">
    <h3 id="line">${playerOneInput.value}</h3>
    <h3 >MATCHES THIS ROUND</h3>
    <h1 id="line" class="matches-round">0</h1>
    <h3>GAME WINS</h3>
  </section>
  <section class="card-container">
    <section class='row1'>
    </section>
    <section class='row2'>
    </section>
    <section class='row3'>
    </section>
  </section>`
  instantiateCards();
}

function instantiateCards() {
  for (var i = 0; i < 10; i++) {
  matchInfo++;
  if (matchInfo === 6) {
    matchInfo = 1;
  }
  var newCard = new Card(matchInfo, i);
  deck.cards.push(newCard);
  }
  showCards();
}

function showCards() {
  // deck.shuffle(deck.cards);
  var cardNum = 0;
for (var i = 0; i < deck.cards.length; i++) {
  cardNum++;
  var row1 = document.querySelector('.row1');
  var row2 = document.querySelector('.row2');
  var row3 = document.querySelector('.row3');
  if (i < 3) {
    row1.innerHTML += `
    <div class="card card${cardNum}" data-name="${deck.cards[i].matchInfo}" data-id="${deck.cards[i].id}">
    <img class="back-card" src="./assets/BeyCardBack.jpg">
    <img class="front-card" src="./assets/bey${deck.cards[i].matchInfo}.jpg">
    </div>`
  } else if (i < 7) {
    row2.innerHTML += `
    <div class="card card${cardNum}" data-name="${deck.cards[i].matchInfo}" data-id="${deck.cards[i].id}">
    <img class="back-card" src="./assets/BeyCardBack.jpg">
    <img class="front-card" src="./assets/bey${deck.cards[i].matchInfo}.jpg">
    </div>`
  } else if (i < 10) {
    row3.innerHTML += `
    <div class="card card${cardNum}" data-name="${deck.cards[i].matchInfo}" data-id="${deck.cards[i].id}">
    <img class="back-card" src="./assets/BeyCardBack.jpg">
    <img class="front-card" src="./assets/bey${deck.cards[i].matchInfo}.jpg">
    </div>`
  }
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));
  }
  countUp();
}

function flipCard(event) {
  var clickedCard = parseInt(event.target.parentNode.dataset.id);
  if (deck.selectedCards.length === 2) {
    return;
  }
    this.classList.add('flipped');
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    firstCard.removeEventListener('click', flipCard);
    deck.selectCards(clickedCard);
    return;
  } else {
    flippedCard = false;
    secondCard = this;
    secondCard.removeEventListener('click', flipCard);
    deck.selectCards(clickedCard);
  }
  checkIfMatch();
}

function checkIfMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    deleteMatches();
    matchesThisRound += 1;
    var roundMatches = document.querySelector('.matches-round');
    roundMatches.innerHTML = matchesThisRound;
  } else {
    firstCard.addEventListener('click', flipCard);
    secondCard.addEventListener('click', flipCard);
    reverseFlip();
  }
}

function deleteMatches() {
  setTimeout(() => {
    firstCard.classList.add('card-hide');
    secondCard.classList.add('card-hide');
    deck.checkSelectedCards();
    if (deck.matchedCards.length === 10) {
      displayGamePage();
      endGame();
    }
  }, 1200);
}

function reverseFlip() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    deck.checkSelectedCards();
  }, 1200);
}

function endGame() {
  addIdea();
  second = 0;
  min = 0;
}

function displayGamePage() {
  mainSection.style.justifyContent = '';
  mainSection.style.marginTop = '50px';
  mainSection.innerHTML = `
  <section class="end-section">
  <div class="congrats">
  <h1>Congratulations ${playerOneInput.value.toUpperCase()}!</h1>
  <h3>It took you ${min} min and ${second} sec!</h3>
  <h4>Click below to play again!</h4>
  </div>
  <div class="start-over">
    <button class="restart-btn" type="button" name="button">RESTART</button>
    <button class="new-game-btn" type="button" name="button">NEW GAME</button>
  </div>
  </section>`;
  var newGameBtn = document.querySelector('.new-game-btn');
  newGameBtn.addEventListener('click', newGame);
}

function addIdea() {
  var player = new Player({
    name: playerOneInput.value.toUpperCase(),
    time: `${min} min and ${second} sec`,
    secondsOnly: second,
  });
  playerArray.push(player);
  player.saveToStorage(playerArray);
}

function newGame() {
  openDirections();
}
