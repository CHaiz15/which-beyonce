var playBtn = document.querySelector('#play-btn');
var secondBtn = document.querySelector('#second-btn');
var mainSection = document.querySelector('.main-section')
var playerOneInput = document.querySelector('.player-one-input');
var inputError = document.querySelector('#error');
var inputDiv = document.querySelector('.input-div');


function flipCard() {
  this.classList.toggle('flipped');
}

// playBtn.addEventListener('click', openDirections);
// playBtn.addEventListener('click', openGame);
window.addEventListener('load', openGame);

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
        <button id="second-btn" type="button" name="button">PLAY GAME</button>
      </div>
      </div>
      `
  }
}

function openGame() {
  mainSection.classList.add('game-page');
  mainSection.style.justifyContent = 'flex-start';
  mainSection.innerHTML = `<section class="game-info">
    <h3 id="line">NAME</h3>
    <h3>MATCHES THIS ROUND</h3>
    <h1 id="line">5</h1>
    <h3>GAME WINS</h3>
  </section>
  <section class="card-container">
    <section class="row1">
      <div class="card card1">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card2">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card3">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
    </section>
    <section class="row2">
      <div class="card card4">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card5">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card6">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card7">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
    </section>
    <section class="row3">
      <div class="card card8">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card9">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
      <div class="card card10">
      <img class="front-face" src="./assets/questionMark.jpg">
      </div>
    </section>
  </section>`
  var cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', flipCard));
}
