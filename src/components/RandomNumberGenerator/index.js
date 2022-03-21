import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  RandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.RandomNumber}
            className="generate-button"
          >
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
