import React, { Component } from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

class App extends Component {
  state = {
    notes: [{ id: 1, content: "Example Note- click me to delete me!" }]
  };
  deleteNote = id => {
    // Filters out the notes that were clicked on
    const notes = this.state.notes.filter(note => {
      return note.id !== id;
    });
    this.setState({
      notes
    });
  };
  addNote = note => {
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({ notes });
  };
  render() {
    return (
      <div className="note-app container">
        <h1 className="center blue-text">Note Taking Application</h1>
        <a href="https://github.com/megletizia/note-taking-app">Github Link</a>
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        <AddNote addNote={this.addNote} />
      </div>
    );
  }
}

export default App;
