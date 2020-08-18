const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

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

    
});