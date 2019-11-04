class Deck {
  constructor(){
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = [];
  }
  shuffle() {

  }
  selectCard(clickedCard) {
    for (var i = 0; i < this.cards.length; i++) {
    if (this.cards[i].id === clickedCard)
      this.selectedCards.push(this.cards[i]);
    }
  }
  checkSelectedCards(clickedCard) {

  }
  moveToMatched() {

  }
}
