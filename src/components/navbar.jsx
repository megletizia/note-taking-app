import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        Note Taking App
        <button onClick={this.props.onAdd}>+</button>
      </nav>
    );
  }
}

export default NavBar;
