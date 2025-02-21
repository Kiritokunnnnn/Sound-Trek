import React, { Component } from "react";

class DarkModeToggle extends Component {
  handleToggle = () => {
    this.props.toggleDarkMode();
  };

  render() {
    return (
      <button className="dark-mode-btn" onClick={this.handleToggle}>
        {this.props.darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    );
  }
}

export default DarkModeToggle;
