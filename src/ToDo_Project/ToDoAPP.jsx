// import React from 'react'

import { Fragment } from "react";
import TodoAppName from "./TodoAppName";
import "./ToDo.css";



function ToDoAPP() {
  return (
    <Fragment>
      <center>
        <div class="container text-center">
          <TodoAppName  />
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter the ToDo Here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" className="btn btn-success">
                ADD
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">Buy Milk</div>
            <div class="col-4">23/02/1994</div>
            <div class="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">Go to College</div>
            <div class="col-4">17/10/2024</div>
            <div class="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </Fragment>
  );
}
export default ToDoAPP;
