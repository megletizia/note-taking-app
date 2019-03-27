import React from "react";

/*  This component is to output the list of notes that come through.
    It will take the notes and as long as there are notes available
    it will map through them and output them below. If there isn't 
    any notes available, it will show a paragraph saying so. 
*/

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
              <span>&times;</span>
            </button>
          </div>
          <p className="note-content" contenteditable="true">
            {note.content}
          </p>
        </div>
      );
    })
  ) : (
    <p className="white-text">No notes- try adding some by clicking above!</p>
  );
  return <div className="notes row">{noteList}</div>;
};

export default Notes;
