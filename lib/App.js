import React from 'react'
import Scrabble from './Scrabble'
require('./styles.scss')

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      word: '',
      multiplier: 1,
      scrabble: new Scrabble(),
      currentScore: 0,
      scores: [],
    }
    this.handleWordInput = this.handleWordInput.bind(this)
    this.handleMultiplier = this.handleMultiplier.bind(this)
    this.submitWord = this.submitWord.bind(this)
  }

  handleWordInput(e) {
    this.setState({word: e.target.value})
  }

  handleMultiplier(e) {
    this.setState({multiplier: e.target.value})
  }

  updateScoresArray(word, currentScore, multiplier) {
    this.setState({
      scores: [...this.state.scores, {
        scoreForWord: currentScore, multiplier,
        scoredWord: word}]
    })
  }

  submitWord() {
    const { word, scrabble, multiplier } = this.state
    this.setState({word: word, currentScore: scrabble.scoreWord(word, multiplier)}, () => {
      const { word, multiplier, currentScore } = this.state
      this.updateScoresArray(word, currentScore, multiplier)
      this.setState({word: '', multiplier: 1})
    })
  }

  loadScores() {
    return this.state.scores.map((e, i) => {
      return <li key={i}>
        Word: {e.scoredWord} <br />
        Score: {e.scoreForWord} <br />
        Multiplier: {e.multiplier}</li>
    })
  }



  render() {
    return(
      <div>
        <input
          type='text'
          onChange={this.handleWordInput}
          value={this.state.word}
        /> <br />
        <input
          type='number'
          onChange={this.handleMultiplier}
          value={this.state.multiplier}
        /> <br />
        <button
          onClick={this.submitWord}>Submit
        </button>
        <h2>{this.state.currentScore}</h2>
        <ul>
          <h2>{this.loadScores()}</h2>
        </ul>
      </div>
    )
  }
}

module.exports = App
