const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');

describe('Turn', () => {
    it('should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });
    
    it('should be able to instantiate a Turn', () =>{
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should be able to have a user\'s guess', () =>{
        const turn = new Turn('option A');
        expect(turn.guess).to.equal('option A');
    });
    it('should be ble to able to instantiate a Card', () =>{
        const turn = new Turn('option A', );
    })
});