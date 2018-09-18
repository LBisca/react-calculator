import React, { Component } from "react";

export default class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <input id="operator" type="text" className="panel panel-operator" />
        <input id="first" type="text" className="panel panel-number" />
        <input id="actual" type="text" className="panel panel-number" />
      </div>
    );
  }
}
