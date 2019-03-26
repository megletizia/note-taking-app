import React, { Component } from "react";

class AddNote extends Component {
  state = {
    content: ""
  };
  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };
  handleSubmit = event => {
    // Need this so that it doesn't refresh the page every event
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Type below your new note: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddNote;
