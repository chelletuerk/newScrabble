import React from 'react'

// import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
// import Scrabble from '../lib/Scrabble'

// const scoreWord = require('../lib/scrabble');

// describe('Scrabble', function() {
//
//   it('should be a function', function() {
//     var score = new score
//     assert.isFunction(scrabble);
//   });
//
//     it.only('should instantiate an object', function () {
//     assert.isObject(letterScores);
//   });
const Scrabble = require('../lib/scrabble');


describe('scrabble', () => {

  it('should have a method called scoreWord', () => {
    const scrabble = new Scrabble();
    assert.isFunction(scrabble.scoreWord)
  });

  it('it should push a word into the array', function(){
    const scrabble = new Scrabble;
    var word = new Scrabble('word')
    scrabble.letterScores[word];
    assert.deepEqual(undefined)
  });

    it('should take the first argument and set it as a property', function () {
    const scrabble = new Scrabble;
    var word = new Scrabble('word');
    assert.equal('word', 'word');
  });

    it('should take the second argument and set it as a property', function () {
    const scrabble = new Scrabble;
    var multiplier = new Scrabble('multiplier');
    assert.equal('multiplier', 'multiplier');
  });




  // it('should ')
  //
  // it('scores null as zero', () => {
  //   expect(scoreWord(null)).toEqual(0);
  // });
  //
  // it('scores a very short word', () => {
  //   expect(scoreWord('a')).toEqual(1);
  // });
  //
  // it('scores the word by the number of letters', () => {
  //   expect(score('street')).toEqual(6);
  // });
  //
  // it('scores more complicated words with more', () => {
  //   expect(score('quirky')).toEqual(22);
  // });
  //
  // it('scores case insensitive words', () => {
  //   expect(score('MULTIBILLIONAIRE')).toEqual(20);
  // });
});
