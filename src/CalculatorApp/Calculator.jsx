import React from "react";
import "./calculator.css";
import CalculatorInput from "./CalculatorInput";
import ButtonsCalculator from "./ButtonsCalculator";
const Calculator = () => {
  return (
    <React.Fragment>
  <div className="container">
   

  <div className="calculator-container">
  <h1 className="text-white"> Calculator</h1>
        <CalculatorInput />

        <ButtonsCalculator/>
      </div>
  </div>
    </React.Fragment>
  );
};

export default Calculator;
