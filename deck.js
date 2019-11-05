class Deck {
  constructor(){
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = 0;
  }
  shuffle() {

  }
  checkSelectedCards(clickedCard) {
    for (var i = 0; i < this.cards.length; i++) {
    if (this.cards[i].id === clickedCard) {
      this.selectedCards.push(this.cards[i]);
    }
  }
}
  moveToMatched() {
    if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
    }
    for (var i = 0; i < this.matchedCards.length; i++) {
      this.matchedCards[i].matched = true;
    }
    if (this.matchedCards.length === 10) {
      endGameOptions();
    }
  }
}
