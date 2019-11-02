var playBtn = document.querySelector('.play-btn');
var main = document.querySelector('.main-section')
var playerOneInput = document.querySelector('.player-one-input');
var inputError = document.querySelector('#error');
var mainSection = document.querySelector('.main-section');
var inputDiv = document.querySelector('.input-div')
var directionsPage =

playBtn.addEventListener('click', openDirections);

function openDirections() {
  event.preventDefault();
  if (playerOneInput.value === "") {
    inputError.classList.remove('error-msg');
    inputDiv.style.marginBottom = '0px';
  } else if (playerOneInput.value !== ""){
    mainSection.style.marginTop = '75px';
    main.innerHTML = `<div class="directions-div"><h2>WELCOME ${playerOneInput.value.toUpperCase()}!</h2>
        <p class="directions-p">The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
        <p class="directions-p">To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé.
        Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at
        them before they flip back over. Then it’s time for the other player to try!</p>
        <p class="directions-p">After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
        </div>`
    }
}
