import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className="card col-sm-6 col-lg-4">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={this.props.onEdit}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#editModal"
          >
            Edit
          </button>

          <button onClick={() => this.props.onDelete(this.props.note.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
