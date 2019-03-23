import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Note Taking Application by Meghan Letizia</p>
          <a
            className="App-link"
            href="https://github.com/megletizia/note-taking-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </header>
        <div>
          <button>Add Note</button>
        </div>
      </div>
    );
  }
}

export default App;
