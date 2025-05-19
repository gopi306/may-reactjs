import React from "react";
import "./calculator.css";

const ButtonsCalculator = () => {
//   const buttonNames = [
//     "+",
//     "1",
//     "2",
//     "-",
//     "3",
//     "4",
//     "*",
//     "5",
//     "6",
//     "/",
//     "7",
//     "8",
//     "=",
//     "9",
//     ".",
//     "0",
//   ];

  return (
    <div className="button-container">

{/* {
    buttonNames.map(buttonName=>  <button className="button">{buttonName}</button>)
} */}

      <button className="btn  btn-danger">c</button>
      <button className="btn  btn-secondary">1</button>
      <button className="btn  btn-secondary">2</button>
      <button className="btn  btn-warning">+</button>
      <button className="btn  btn-secondary">3</button>
      <button className="btn  btn-secondary">4</button>
      <button className="btn  btn-warning">-</button>
      <button className="btn  btn-secondary">5</button>
      <button className="btn  btn-secondary">6</button>
      <button className="btn  btn-warning">*</button>
      <button className="btn  btn-secondary">7</button>
      <button className="btn  btn-secondary">8</button>
      <button className="btn  btn-warning">/</button>
      <button className="btn  btn-secondary">9</button>
      <button className="btn  btn-secondary">0</button>
      <button className="btn  btn-warning">.</button>
   
      <button className="btn  btn-success">=</button>
    </div>
  );
};

export default ButtonsCalculator;
