import React, { Component } from "react";

import EditNote from "./editnote";

class Note extends Component {
  render() {
    return (
      <div className="card col-sm-6 col-lg-4">
        <div className="card-body">
          <h5 className="card-title">Note title</h5>
          <p className="card-text">Note Body</p>
          <EditNote />
          <button
            onClick={this.props.onEdit}
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.onDelete(this.props.note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
