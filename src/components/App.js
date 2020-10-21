import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paraText: ""
    };
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={() =>
            this.setState({
              paraText: `Hello, I've learnt to use the full-stack evaluation tool. This makes
    me so happy`
            })
          }
        >
          Click me to render para
        </button>
        {this.state.paraText ? <p id="para">{this.state.paraText}</p> : null}
      </div>
    );
  }
}

export default App;
