import React from "react";

const Notes = ({ notes, deleteNote, editNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div className="collection-item" key={note.id}>
          {note.content}
          <div className="buttons">
            <button
              onClick={() => {
                editNote(note.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteNote(note.id);
              }}
            >
              X
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <p className="center white-text">No notes listed</p>
  );
  return <div className="notes collection">{noteList}</div>;
};

export default Notes;
