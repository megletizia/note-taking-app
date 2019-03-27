import React, { Component } from "react";
import Notes from "./Components/Notes.jsx";
import AddNote from "./Components/AddNote.jsx";

class App extends Component {
  state = {
    notes: [{ id: 1, content: "Example Note!" }]
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
      <div className="container">
        <h1 className="cw title">Note Taking Application</h1>
        <p className="white-text">
          This application will allow users to create, read, update and delete
          notes. You can start by adding a note by typing in the note ahead of
          time on the line below and pressing the enter key or pressing the add
          icon.
        </p>
        <h4 className="cw ">By Meghan Letizia</h4>
        <a
          className="center"
          href="https://github.com/megletizia/note-taking-app"
        >
          <h4>Github Link</h4>
        </a>
        <AddNote addNote={this.addNote} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;
