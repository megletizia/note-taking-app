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
        <form className="add-note" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Note text here"
            className="input-text"
            onChange={this.handleChange}
            value={this.state.content}
            required
          />
        </form>
      </div>
    );
  }
}

export default AddNote;
