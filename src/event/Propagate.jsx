import React from "react";
import "./Prop.css";
const Propagate = () => {
    const grandClicked=()=>{
        console.log('Grand Clicked');
        
    }
    const parentClicked=()=>{
        console.log('parent Clicked');
        
    }

            
            const childClicked=(event)=>{
        console.log(event);
        event.stopPropagation()
        console.log("child Clicked");
        
        
    }
  return (
    <React.Fragment>
      <div className="container">
        <div className="g-div" onClick={grandClicked}>
          <div className="p-div" onClick={parentClicked}>
            <button className="c-div" onClick={childClicked}> Child Comp</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Propagate;
