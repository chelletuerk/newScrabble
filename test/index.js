import React from 'react'
import { assert, expect } from 'chai'
import { shallow, mount, render } from 'enzyme';

const sinon=require('sinon')
const Scrabble = require('../lib/scrabble');
const App = require('../lib/App');


describe('scrabble', () => {

  it('can mount with no properties', () => {
  const wrapper = shallow(<App />)
  })

  

  it('should have a method called scoreWord', () => {
    const scrabble = new Scrabble();
    assert.isFunction(scrabble.scoreWord)
  });

  it('it should filter out anything undefined', function(){
    const scrabble = new Scrabble();
    let word = new Scrabble('!word')
    scrabble.letterScores[!word];
    assert.deepEqual(undefined)
  });

    it('should take the first argument and set it as a property', function () {
    const scrabble = new Scrabble();
    let word = new Scrabble('word');
    assert.equal('word', 'word');
  });

  it('it should push a word into the array', function(){
    const scrabble = new Scrabble();
    let word = new Scrabble('word')
    scrabble.letterScores[word];
    assert.equal(scrabble.letterScores[word])
  });

    it('should take the second argument and set it as a property', function () {
    const scrabble = new Scrabble();
    let multiplier = new Scrabble('multiplier');
    assert.equal('multiplier', 'multiplier');
  });

    it('should filter an array of words', () => {
      const scrabble = new Scrabble();
      assert.equal(scrabble.scoreWord.filter)
    })

    it('should add point from letterScores object', () => {
      const scrabble = new Scrabble();
      const addPoint = scrabble.letterScores
      assert.equal('', '')
    })






});
