import React, { Component } from "react";
import Note from "./note";

class Notes extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="row">
        {notes.map(note => (
          <Note
            note={note}
            key={note.id}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Notes;
