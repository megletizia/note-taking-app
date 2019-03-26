import React from "react";

const Notes = ({ notes, deleteNote, editNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div className="card col-sm-6 col-lg-3 collection-item" key={note.id}>
          <p contenteditable="true">{note.content}</p>
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
  return <div className="notes collection row">{noteList}</div>;
};

export default Notes;
