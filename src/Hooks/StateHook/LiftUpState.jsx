import React, { useState } from "react";

const LiftUpState = () => {
  const [inputValue, setInputValue] = useState(" ");
  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default LiftUpState;

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      value={inputValue}
      placeholder="Enter the Name"
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

const DisplayComponent= ({inputValue}) => {
  return <h1>Display the InputValue:{inputValue}</h1>;
};
