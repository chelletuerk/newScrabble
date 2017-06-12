import React from 'react'
import Scrabble from './Scrabble'
require('./styles.scss')

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        word: '',
        multiplier: 1,
        scores: [],
        currentScore: 0,
        scrabble: new Scrabble(),
      }
      this.handleWordInput = this.handleWordInput.bind(this)
      this.handleMultiplierInput = this.handleMultiplierInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleWordInput(e) {
      this.setState({word: e.target.value})
    }

    handleMultiplierInput(e) {
      this.setState({multiplier: e.target.value})
    }

    updateScoresArray(word, currentScore, multiplier) {
      this.setState({
        scores:[...this.state.scores, {scoredWord: word, scoreForWord: currentScore, currentScore, multiplier}
        ]
      }, ()=> {
        const total = this.state.scores
          .map(e => e.scoreForWord)
          .reduce((a, b) => a + b)

          this.setState({total})
      })
    }

    handleSubmit() {
      const { scrabble, word, multiplier, scores, currentScore } = this.state
      this.setState({currentScore: scrabble.scoreWord(word, multiplier)}, () => {
        const { word, currentScore, multiplier } = this.state
        this.updateScoresArray(word, currentScore, multiplier)
        this.setState({word: ''})
      })
    }

  render() {
    return (
      <div>
        Word:
        <input
          type='text'
          value={this.state.word}
          onChange={this.handleWordInput}
        /> <br />
        Multiplier:
        <input
          value={this.state.multiplier}
          type='number'
          onChange={this.handleMultiplierInput}
        /> <br />
        <button
          onClick={this.handleSubmit}>Submit
        </button>
        <h2>{this.state.currentScore}</h2>
      </div>
    )
  }
}


module.exports = App
