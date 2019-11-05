class Deck {
  constructor(){
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = 0;
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }
  selectCards(clickedCard) {
    for (var i = 0; i < this.cards.length; i++) {
    if (this.cards[i].id === clickedCard) {
      this.selectedCards.push(this.cards[i]);
    }
  }
}
  checkSelectedCards() {
    if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
      this.moveToMatched();
      this.selectedCards = [];
    }
    this.selectedCards = [];
  }
  moveToMatched() {
     for (var i = 0; i < this.selectedCards.length; i++) {
        this.matchedCards.push(this.selectedCards[i]);
        this.selectedCards[i].match();
    }
}
}
