import React from "react";

const Button = props => {
  function onButtonClick() {
    document.getElementById("actual").value += number;
  }

  const { number } = props;
  return (
    <div className="number-btn" onClick={onButtonClick}>
      {number}
    </div>
  );
};

export default Button;
