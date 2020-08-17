const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')
const Turn = require('../src/Turns');

describe('Turn', () => {
  let card;
  let turnOne;
  let turnTwo;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turnOne = new Turn('object', card);
    turnTwo = new Turn('array', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be able to instantiate a Turn', () =>{
    expect(turnOne).to.be.an.instanceof(Turn);
  });

  it('should be able to guess the answer', () => {
    expect(turnOne.guess).to.equal('object');
  });

  it('should be ble to able to instantiate a Card', () => {
    expect(turnOne.card).to.deep.equal(card);
  });

  it('should be able to return the user\'s guess', () => {
    const guess = turnOne.returnGuess();
    expect(guess).to.equal('object');
  });

  it('should be able to return the current card', () => {
    const turnCard = turnOne.returnCard();
    expect(turnCard).to.deep.equal(card);
  });

  it('should be able to evaluate the user\'s guess', () => {
    const questionOne = turnOne.evaluateGuess();
    const questionTwo = turnTwo.evaluateGuess();

    expect(questionOne).to.equal(true);
    expect(questionTwo).to.equal(false);
  });

  it('should be able to give a correct or incorrect statement', () => {
    const questionOne = turnOne.giveFeedback();
    const questionTwo = turnTwo.giveFeedback();

    expect(questionOne).to.equal('correct!');
    expect(questionTwo).to.equal('incorrect!');
  });

});