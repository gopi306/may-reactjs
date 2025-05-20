import React from "react";

const StateUse = () => {
  const user = [
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
  ];

  return <React.Fragment>

<h1>Users List using Map method </h1>
<ul>
    {user.map((curEle,index)=>{
        return <li key={index}>
{curEle.userName}-{curEle.age}
        </li>
    })}
</ul>
  </React.Fragment>;
};

export default StateUse;
