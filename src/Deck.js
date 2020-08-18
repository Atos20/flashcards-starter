class Deck {
  constructor(cards) {
    this.currentCards = cards;
  }

  cardCount() {
    return this.currentCards.length
  }
}

module.exports = Deck;