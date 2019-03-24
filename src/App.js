import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Notes from "./components/notes";

class App extends Component {
  state = {
    notes: [{ id: 1, value: 4 }]
  };

  handleAddNote = () => {
    let notes = this.state.notes;
    notes.push({ id: 5, value: 4 });
    this.setState({ notes });
    console.log("handleAddNote");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onAdd={this.handleAddNote} />
        <main className="container">
          <Notes notes={this.state.notes} />
        </main>
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
        </div>
      </React.Fragment>
    );
  }
}

export default App;
