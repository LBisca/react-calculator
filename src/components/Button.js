import React from "react";

const Button = props => {
  function onButtonClick() {
    document.getElementById("actual").value += number;
  }

  const { number } = props;
  return (
    <div className="keyboard number-buttons number" onClick={onButtonClick}>
      {number}
    </div>
  );
};

export default Button;
