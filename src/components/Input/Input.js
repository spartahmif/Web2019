import React, { Component } from "react";

export class Input extends Component {
  state = { input: "" };

  onChange = event => {
    event.persist();
    this.setState({ input: event.target.value }, () => {
      this.props.onChange(event);
    });
  };

  render() {
    return (
      <div className="ui fluid left icon input">
        <input
          type={this.props.className === "password" ? "password" : "text"}
          placeholder={this.props.placeholder}
          value={this.state.input}
          onChange={this.onChange}
          className={this.props.className}
        />
        <i aria-hidden="true" class={[this.props.icon, "icon"].join(" ")}></i>
      </div>
    );
  }
}
