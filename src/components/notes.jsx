import React, { Component } from "react";
import Note from "./note";

class Notes extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="row">
        {notes.map(note => (
          <Note />
        ))}
      </div>
    );
  }
}

export default Notes;
