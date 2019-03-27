import React from "react";

const Notes = ({ notes, deleteNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div className="card col-sm-6 col-lg-3 collection-item" key={note.id}>
          <div className="buttons">
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={() => {
                deleteNote(note.id);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p contenteditable="true">{note.content}</p>
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
