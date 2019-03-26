import React from "react";

const Notes = ({ notes, deleteNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div className="collection-item" key={note.id}>
          <span
            onClick={() => {
              deleteNote(note.id);
            }}
          >
            {note.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">No notes left- create one below!</p>
  );
  return <div className="notes collection">{noteList}</div>;
};

export default Notes;
