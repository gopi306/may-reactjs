import React from "react";

import "./Event.css";

const Event = () => {
  const handleUser = (user) => {
    console.log(`Hey , ${user} `);
  };
  const handleHover = () => {
    console.log("hai thanks for hovering me");
  };
  return (
    <div>
      <WelComeUser
        onClick={() => handleUser("Gopi")}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

export default Event;
const WelComeUser = (props) => {

  const {onClick,onMouseEnter}=props
  const gretting = () => {
    console.log(`hey ,user welcome`);
  };

  return (
    <>
      <button onClick={onClick}>click</button>
      <button onMouseEnter={onMouseEnter}>Mouse enter</button>

      <button onClick={gretting}>Greeting</button>
    </>
  );
};
