import React, { useState } from "react";
import "./State.css"; // Import the CSS file for styling
import { IoIosSwitch } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi"
const SwitchButton = () => {
  // Step 1: Initialize state
  const [isOn, setIsOn] = useState(false);

  // Step 2: Create a toggle function
  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (

    <React.Fragment>

      <h1 style={{color:'red'}}>  <IoIosSwitch /> <GiDeliveryDrone/> </h1>
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
      <span className="label-text">
        {isOn ? "Switch is ON" : "Switch is OFF"}
      </span>
    </div>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Toggle Switch Example</h1>
      <SwitchButton />
    </div>
  );
};

export default App;
