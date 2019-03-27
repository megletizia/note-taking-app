import React from "react";

const Notes = ({ notes, deleteNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div
          className="card post-it col-sm-6 col-lg-3 collection-item"
          key={note.id}
        >
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
            <p contenteditable="true" className="post-it-text">
              {note.content}
            </p>
          </div>
        </div>
      );
    })
  ) : (
    <p />
  );
  return <div className="notes row">{noteList}</div>;
};

export default Notes;
