
import "./propagate.css";
export const EventPropagation=()=>{
    // !Event propagation in React (and in the DOM in general) refers to the way events travel through the DOM tree when an event occurs. There are two main phases of event propagation: capturing and bubbling.

    //! 1. Capturing Phase
    // *In the capturing phase, the event starts from the root of the DOM tree and travels down to the target element. This phase is less commonly used in React.
    
    //! 2. Bubbling Phase
    //* In the bubbling phase, the event starts from the target element and bubbles up to the root of the DOM tree. This is the default behavior in React and is the phase most developers work with.
    const handleGrandClick=()=>{
        console.log('clicked grand parent');
        
        console.log(' when click the grand parent button it is only visable for grand parent');
        
    }
    const handleparentClick=()=>{
        console.log('clicked  parent it visable for parent and grand parent');
        
    }
    // !Stopping Event Propagation

// *You can stop the event from propagating to parent elements by using the stopPropagation method. Here’s how you can do it:
    const handleChildClick=(event)=>{
      
        console.log(event);
        //! Stopping Propagation: 
        // *Use event.stopPropagation() to prevent an event from bubbling up to parent elements.
        event.stopPropagation();
        console.log('Clicked Child');  
        
    }
    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandClick}>
                <div className="p-div" onClick={handleparentClick}>
                   <button className="c-div" onClick={handleChildClick}>Child</button>
                </div>
            </div>
        </section>
    )
}