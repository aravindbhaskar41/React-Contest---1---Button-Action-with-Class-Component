import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  state = {
    isButtonClicked: false
  };
  render() {
    return (
      <div className="App">
        <button
          id="click"
          onClick={() => this.setState({ isButtonClicked: true })}
        >
          Click me to render para
        </button>
        {this.state.isButtonClicked === true ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
