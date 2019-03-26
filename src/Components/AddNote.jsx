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
          <h4 className="white-text">Type your new note below: </h4>
          <input
            type="text"
            className="input-text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddNote;
