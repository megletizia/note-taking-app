import React, { Component } from "react";
import Notes from "./Components/Notes.jsx";
import AddNote from "./Components/AddNote.jsx";

class App extends Component {
  state = {
    notes: [{ id: 1, content: "Example Note!" }]
  };
  // Delete function for when a user presses the close icon on a note
  deleteNote = id => {
    // Filters out the notes that were clicked on
    const notes = this.state.notes.filter(note => {
      // returns all the notes that don't have the same id as the one clicked
      return note.id !== id;
    });
    this.setState({
      notes
    });
  };
  // Add function for when a user presses the add icon on a note or types in the form
  addNote = note => {
    // Gives the new added notes a random id
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({ notes });
  };
  render() {
    return (
      // Front page of application when it is first opened
      <div className="container">
        <h1 className="cw row">Note Taking Application</h1>
        <div className="row">
          <h4 className="white-text col-sm-5">By Meghan Letizia</h4>
          <a
            className="col-sm-7"
            href="https://github.com/megletizia/note-taking-app"
          >
            <h4>Github Link</h4>
          </a>
        </div>
        <p className="card intro row">
          This application will allow users to create, read, update and delete
          notes. You can start by adding a note by typing in the note ahead of
          time on the line below and pressing the enter key or pressing the add
          icon.
        </p>
        <AddNote addNote={this.addNote} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;
