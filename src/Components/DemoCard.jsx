import React, { Fragment } from "react";

const DemoCard = () => {
  return (
    <Fragment>
      <div className="card ">
      
     <img src="/component.jpg" alt="" srcset="" />
        <div className="card-body bg-secondary text-white">
          <h1 className="card-title">Demo Card </h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus ab laudantium dolorum provident facere molestiae debitis
            odit nemo totam veritatis non officia beatae quia eligendi,
            temporibus illo aliquid quas.
          </p>
          <a href="#"  className="btn btn-primary" > Go Somewhere</a>
         
        </div>
      </div>
    </Fragment>
  );
};

export default DemoCard;
