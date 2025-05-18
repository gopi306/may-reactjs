import { Fragment } from "react";
import "./App.css";
// import ToDoAPP from "./ToDo_Project/ToDoAPP";
import ClockHeading from "./BharathClock/ClockHeading";
import ClockSlogan from "./BharathClock/ClockSlogan";
import CurrentTime from "./BharathClock/CurrentTime";
// import Demo from "./Components/Demo";
// import Card from "./Components/Card";
// import DemoCard from "./Components/DemoCard";


function App() {
  return (
    <Fragment>
     
     <h1>HI ReactJs</h1>
     {/* <Demo/> */}

     {/* <DemoCard/> */}

     {/* <Card/> */}


     {/* <ToDoAPP/> */}
<div className="container-time bg-secondary p-3 text-white">
<ClockHeading/>
<ClockSlogan/>
<CurrentTime/>
</div>

    </Fragment>
  );
}

export default App;
