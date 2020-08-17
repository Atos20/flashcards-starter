class Turn {
  constructor(usersGuess, card) {
    this.guess = usersGuess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.card.correctAnswer === this.guess ? true : false;
  }

  giveFeedback() {
    return this.card.correctAnswer === this.guess ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;