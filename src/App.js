import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Notes from "./components/notes";

class App extends Component {
  state = {
    currentId: 0,
    notes: [{ id: 0 }]
  };

  handleAddNote = () => {
    let currentId = this.state.currentId + 1;
    let notes = this.state.notes;
    notes.push({ id: currentId });
    this.setState({ notes, currentId });
  };

  handleDeleteCard = cardId => {
    let notes = this.state.notes.filter(n => n.id !== cardId);
    this.setState({ notes });
  };
  handleEditCard = () => {
    console.log("edit");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onAdd={this.handleAddNote} />
        <main className="container">
          <Notes
            notes={this.state.notes}
            onEdit={this.handleEditCard}
            onDelete={this.handleDeleteCard}
          />
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
