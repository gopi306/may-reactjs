import React, { useState } from "react";

const DerivedState = () => {
  let [user, setUser] = useState([
    {
      userName: "Gopi",
      age: 32,
    },
    {
      userName: "Usha",
      age: 30,
    },
    {
      userName: "Chharvi",
      age: 0.8,
    },
    {
      userName: "Chandra",
      age: 55,
    },
    {
      userName: "VaraLakshMi",
      age: 52,
    },
  ]);
  console.log(user);

  let userCount = user.length;

  let Age = user.reduce((acc, curEle) => acc + curEle.age, 0) / userCount;

  return (
    <React.Fragment>
      <div className="container">
        <h1>Users List using Map method </h1>
        <ul>
          {user.map((user, index) => {
            return (
              <li key={index}>
                {user.userName}-{user.age}
              </li>
            );
          })}
        </ul>

        <p>User Count :{userCount}</p>
        <p>Average User :{Age}</p>
      </div>
    </React.Fragment>
  );
};

export default DerivedState;
