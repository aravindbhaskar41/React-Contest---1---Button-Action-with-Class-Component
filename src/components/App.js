import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  state = {
    para: ""
  };
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({
              para: `Hello, I've learnt to use the full-stack evaluation tool. This makes
		  me so happy`
            })
          }
        >
          Click me to render para
        </button>
        <p id="para">{this.state.para}</p>
        )}
      </div>
    );
  }
}

export default App;
