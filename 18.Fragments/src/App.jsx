import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <React.Fragment>
      {/* <> */}
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {/* <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li> */}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      {/* </> */}
    </React.Fragment>
  );
};

export default App;
