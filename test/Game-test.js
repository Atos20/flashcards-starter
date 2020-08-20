const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
// const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Game', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(() =>  {
    card1 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
    card2 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
    card3 = new Card(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game();
  })
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be able to instantiate a game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should be able to instantiante a Round class', () => {
    //should intantiate the round class
    expect(game.currentRound).to.deep.equal(null)
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)

  })
});