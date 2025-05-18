import React from "react";

const MapMethod = () => {
  let foodItems = ["Rotee", "Paneer", "Chicken Curry", "Sooap"];
  return (
    <React.Fragment>
      <h1>TransForm array items into JaX using Map Method</h1>
      <p>
        map Method renders the lists from Array Data.

        inline rendering :Directly inside the Jsx
        Key: key property must be in child component
        li key=item  item  /li
      </p>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default MapMethod;
