import React from "react";
import "./Event.css";

const EventHandling = () => {
  let handleClicked = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("I am clicked Event");
    
  };

  let handleWelcomeUser=(user)=>{
    console.log(`i am ${user}`);
    
  }
  return (
    <div>
      {/* //* Function Components with Named Functions 
 //?   Reamember how we have not called this function .if you call this function here then it will run without event clicking. you just need to pass the reference, not call here  

*/}
      <button onClick={handleClicked}> ClickMe-1</button> <br />
      <button onClick={(event) => handleClicked(event)}> ClickMe-2</button>

      {/* //* InLine Event Handler */}
      <button onClick={(event) => console.log(event)}>In-Line Event </button>



{/*//* Function Arguments to Event handler */}

<button onClick={()=>handleWelcomeUser("gopi")}>CLICK ME</button>
      
    </div>
  );
};



export default EventHandling;
