const Turn = require('../src/Turns');

class Round {
    constructor(deck) {
      this.deck = deck;
      this.turns = 0;
      this.incorrectGuesses = [];
    }

    returnCurrentCard() {
      return this.deck.currentCards[this.turns];
    }

    takeTurn(guess){
      const newTurn = new Turn (guess, this.returnCurrentCard());
      this.turns++;
      if (!newTurn.evaluateGuess()){
        this.incorrectGuesses.unshift(newTurn.card.id)
      }
      return newTurn.giveFeedback()
    }

    calculatePercentCorrect() {
      return Math.floor((this.deck.currentCards.length - this.incorrectGuesses.length) / this.deck.currentCards.length * 100);
    }

    endRound() {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }

module.exports = Round;