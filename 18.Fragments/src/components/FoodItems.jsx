const FoodItems = () => {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <div>
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </div>
  );
};
export default FoodItems;
