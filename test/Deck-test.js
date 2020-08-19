const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;
  let emptyDeck;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    deck = new Deck([card1, card2, card3]);
    emptyDeck = new Deck([]);
    card1 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
    card2 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
    card3 = new Card(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance a Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be able to have some cards', () => {
    expect(deck.currentCards).to.deep.equal([card1, card2, card3])
  });

  it('should be able to count the amount of cards in the deck', () => {
    expect(deck.cardCount()).to.deep.equal(3)
    expect(emptyDeck.cardCount()).to.deep.equal(0)
  });
});