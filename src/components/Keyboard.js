import React from "react";
import Button from "./Button";
import OperatorButton from "./OperatorButton";

const Keyboard = () => {
  function calculate() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("actual").value);
    let operator = document.getElementById("operator").value;

    switch (operator) {
      case "+":
        document.getElementById("first").value = `${a} ${operator} ${b} =`;
        document.getElementById("actual").value = a + b;
        break;
      case "-":
        document.getElementById("first").value = `${a} ${operator} ${b} =`;
        document.getElementById("actual").value = a - b;
        break;
      case "*":
        document.getElementById("first").value = `${a} ${operator} ${b} =`;
        document.getElementById("actual").value = a * b;
        break;
      case "/":
        document.getElementById("first").value = `${a} ${operator} ${b} =`;
        document.getElementById("actual").value = a / b;
        break;
    }
  }

  return (
    <div className="keyboard">
      <div id="buttons" className="number-buttons">
        <Button number="0" />
        <Button number="1" />
        <Button number="2" />
        <Button number="3" />
        <Button number="4" />
        <Button number="5" />
        <Button number="6" />
        <Button number="7" />
        <Button number="8" />
        <Button number="9" />
      </div>

      <div className="operator-buttons">
        <OperatorButton operator="+" />
        <OperatorButton operator="-" />
        <OperatorButton operator="*" />
        <OperatorButton operator="/" />
        <div className="operator-btn" onClick={calculate}>
          =
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
