import React, { useState } from "react";
import "./State.css";

const State = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount((count) => count >0 ? count-1: 0  );
  };
  const reset = () => {
    setCount(() => 0);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <p>Counter Product</p>
            </div>
            <div className="card-body">
              <h1 className="content">{count}</h1>

              <button className="btn btn-success"  onClick={increment}>Increment</button>
              <button className="btn btn-success"  onClick={decrement}>Decrement</button>
              <button className="btn btn-success"  onClick={reset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default State;
