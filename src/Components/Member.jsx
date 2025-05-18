import React from "react";
import "./Member.css";
const Member = (props) => {
  let memberName = props.name;
  let memberAdress = props.address;
  return (
    <div className="container ">
      
              <h2>{memberName}</h2>
              <p>{memberAdress}</p>
         
    </div>
  );
};

export default Member;
