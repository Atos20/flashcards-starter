const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')
const Turn = require('../src/Turns');

describe('Turn', () => {
  let card;
  let turn
  beforeEach(function() {
      card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', () => {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be able to instantiate a Turn', () =>{
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to guess the answer', () => {
    const turn = new Turn('object');

    expect(turn.guess).to.equal('object');
  });

  it('should be ble to able to instantiate a Card', () => {
    const turn = new Turn('object', card);

    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return the user\'s guess',() => {
    const turn = new Turn('object', card);
    const guess = turn.returnGuess();

    expect(guess).to.equal('object');
  });

  it('should be able to return the current card',() => {
    const turn = new Turn('object', card);
    const turnCard = turn.returnCard();

    expect(turnCard).to.deep.equal(card);
  });

  it('should be able to evaluate the user\'s guess',() => {
    const turn = new Turn('object', card);
    const turnTwo = new Turn('array', card)

    const questionOne = turn.evaluateGuess();
    const questionTwo = turnTwo.evaluateGuess();

    expect(questionOne).to.equal(true);
    expect(questionTwo).to.equal(false);
  });

  it('should be able to give a correct or incorrect statement',() => {
    const turn = new Turn('object', card);
    const turnTwo = new Turn('array', card)

    const questionOne = turn.giveFeedback();
    const questionTwo = turnTwo.giveFeedback();

    expect(questionOne).to.equal('correct!');
    expect(questionTwo).to.equal('incorrect!');
  });

});