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
    if(this.card.correctAnswer === this.guess){
        return true 
    } else {
        return false
    }
  }

  giveFeedback() {
    if(this.card.correctAnswer === this.guess){
        return 'correct!';
    } else {
        return 'incorrect!';
    }
  }
};

module.exports = Turn;