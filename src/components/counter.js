import React, { Component } from "react"

export default class Counter extends Component {
  state = {
    count: 0,
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="counter">
        <h3>click the button if you like the post</h3>
        <h3>likes {this.state.count}</h3>
        <button onClick={this.increaseCount}>click me</button>
      </div>
    )
  }
}
