import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const App = () => {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // let foodItems = [];

  // let emptymessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <React.Fragment>
      {/* <> */}
      <h1 className="kg-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
      {/* </> */}
    </React.Fragment>
  );
};

export default App;

// {/* <ul className="list-group">
//         {/* <li class="list-group-item">Dal</li>
//         <li class="list-group-item">Green Vegetable</li>
//         <li class="list-group-item">Roti</li>
//         <li class="list-group-item">Salad</li>
//         <li class="list-group-item">Milk</li> */}
//         {/* {emptymessage} */}
//         <ErrorMessage />
//         <FoodItems />
//       </ul> */}
