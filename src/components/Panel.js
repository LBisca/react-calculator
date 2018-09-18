import React, { Component } from "react";

export default class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <input id="operator" type="text" className="operator" />
        <input id="first" type="text" className="panel-number" />
        <input id="actual" type="text" className="panel-number" />
      </div>
    );
  }
}
