import React from "react";

const OperatorButton = props => {
  function operatorClick() {
    document.getElementById("first").value = document.getElementById(
      "actual"
    ).value;
    document.getElementById("actual").value = "";
    document.getElementById("operator").value = operator;
  }

  const { operator } = props;
  return (
    <div className="keyboard operator-buttons operator" onClick={operatorClick}>
      {operator}
    </div>
  );
};

export default OperatorButton;
