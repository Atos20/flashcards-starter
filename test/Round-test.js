const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
//need to return the first card being played in the round

describe('Round', () => {
    let round;
    let deck;
    let card1;
    let card2;
    let card3;
  
    beforeEach(function() {
      round = new Round(deck);
      deck = new Deck([card1, card2, card3]);
      card1 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
      card2 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
      card3 = new Card(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    });

    it('should be a function', () => {
      expect(Round).to.be.a('function');
    });

    it('should be an instance a Deck', () => {
      expect(round).to.be.an.instanceof(Round);
    }); 

    it('should be able to instantiate a Deck class', () => {
      expect(round.deck).to.deep.equal(deck);
      expect(round.deck.currentCards).to.deep.equal([card1, card2, card3]);
    })

    it('should be able to return the first card on the deck', () => {
      expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should be able to count of turns played', () => {
      expect(round.turns).to.equal(0);
      round.takeTurn('A');
      round.takeTurn('B');
      expect(round.turns).to.equal(2);  
    });

    it('should be able to keep track of incorrect guesses ids', () => {
      expect(round.incorrectGuesses.length).to.deep.equal(0);
      round.takeTurn('A');
      round.takeTurn('B');
      expect(round.incorrectGuesses.length).to.deep.equal(2);
    });

    it('should be able to return wether a guess is correct or incorrect', () => {
      const guess1 = round.takeTurn('sort()');
      const guess2 = round.takeTurn('map()');

      expect(guess1).to.equal('correct!');
      expect(guess2).to.equal('incorrect!');
    });

    it('should be able to calculate and returns the precentage of correct guesses', () => {
      round.takeTurn('sort()');//there is only one good answer so the percentage should be 33
      round.takeTurn('join()');
      round.takeTurn('array');
      const returnPercentage = round.calculatePercentCorrect();
      expect(returnPercentage).to.equal(33);
    });
    it('should be able to end the round and return ending message', () => {
      round.takeTurn('sort()');
      round.takeTurn('join()');
      round.takeTurn('array');
      const endOfRound = round.endRound()
      expect(endOfRound).to.equal('** Round over! ** You answered 33% of the questions correctly!')
    });
});