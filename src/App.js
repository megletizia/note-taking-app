import React, { Component } from "react";
import Notes from "./Components/Notes.jsx";
import AddNote from "./Components/AddNote.jsx";

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
        <AddNote addNote={this.addNote} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;
